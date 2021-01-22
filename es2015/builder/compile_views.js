import { getFiles, folderViewList, parseFunction } from './files.js';
import puppeteer from "puppeteer";
import { promises as fs } from 'fs';


const htmlProperty = /"html":".*?",/gmi;
const viewProperty = /(views(["']|)\s*?:\s)/mig;


const componentObjectString = /export.*?\s({.*})/gims;

export class compileViews {
    constructor() {

    }

    /**
     * 
     * @param {*} codeStr 
     */
    parseParanthesisReturnEnd(codeStr) {

        const par = /(\{)|(\})/gmi;

        let m;
        let openMatch = 0;
        while ((m = par.exec(codeStr)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === par.lastIndex) {
                par.lastIndex++;
            }

            if (m[0] === "{") {
                openMatch++;
            }

            if (m[0] === "}") {
                openMatch--;
            }

            if (openMatch === 0) return m[0].length + m.index;

        }
    }


    toCode(obj, str) {

        for (let i in obj) {

            if (obj.hasOwnProperty(i)) {
                if (typeof obj[i] === "object") {
                    str.push(`"${i}" : { ${this.toCode(obj[i], [])} }`);
                } else if (typeof obj[i] === "function") {
                    let fn = obj[i].toString();

                    str.push(`"${i}" :  ${parseFunction(fn).toString()}`);

                } else if (typeof obj[i] === "string") {
                    str.push(`"${i}" : \`${obj[i]}\``);
                } else {
                    str.push(`"${i}" : ${obj[i]}`);
                }

            }

        }

        return str.join(",");

    }

    dehybernate(str) {
        return JSON.parse(str,
            (k, v) => typeof v === "string" ?
                (/(.*)\(/.exec(v) !== null && k !== "html" ? ((v) => {


                    let ret = "";
                    try {
                        ret = eval(`(function ${v} )`);
                    } catch (e) {
                        ret = eval(`(${v} )`);
                    }

                    return ret
                })(v) : v) : v);
    }

    /**
     * 
     * @param {*} file 
     * @param {*} content 
     * @param {*} component 
     */
    async writeToJSFile(file, component) {

        let newFileData = await fs.readFile(file, 'utf8');
        try {

            let m = Array.from(newFileData.matchAll(viewProperty))[0];

            if (m) {
                let startStr = newFileData.substr(m.index);
                let objStr = startStr.substr(0, this.parseParanthesisReturnEnd(startStr));
                newFileData = newFileData.replace(objStr, "").replace(/,\s*,/g, ",").replace(",,", ",");
            }

            newFileData = newFileData.replace(htmlProperty, `views : ${component.viewsTemplate},
            `);

        } catch (e) {
            console.log(e);
        }

        await fs.writeFile(file, newFileData);

    }

    async setupPuppeteer() {

        const browser = await puppeteer.launch({
          //  headless: false,
          //  devtools: true,
            args: ["--disable-web-security"],
        });
        const page = await browser.newPage();
        await page.setBypassCSP(true);
        await page.addScriptTag({ path: "./node_modules/radbod/dist/radbod.js" });

        return { browser, page };
    }

    /**
     * 
     * @param {*} folder 
     * @param {*} options 
     */
    async compileMultiple(folder) {

        const { browser, page } = await this.setupPuppeteer();

        console.log("BUILD VIEW FOR FOLDER: " + folder);

        for await (const file of getFiles(folder || './test/todoMVC/public/build/dev/')) {

            if (file.split(".")[1] !== "js" || file.indexOf("i18n") >= 0) continue;
            if (folderViewList(file)) continue;

           await this.compileSingleFile(file, page);
        }

      await browser.close();

    }

    async compileSingleFile(file, page) {

        console.log("BUILD VIEW: " + file);

        try {
            let componentModule = await import(file + "?t=" + new Date());

            let componentName = Object.keys(componentModule)[0];
            let component = componentModule[componentName];
            
            if (component.html || component.views) {
                // Get the "viewport" of the page, as reported by the page.
                let componentSerialized = JSON.stringify(component, (k, v) => typeof v === "function" ? v.toString() : v);

                let compiledComponent = await page.evaluate(this.insidePuppeteer, componentName, componentSerialized);
                
                await this.writeToJSFile(file, compiledComponent);
            }

        } catch (e) {
            console.log(e);
        }

    }

    insidePuppeteer = (componentName, componentSerialized) => {

        let component = JSON.parse(componentSerialized,
            (k, v) => typeof v === "string" ?
                (/(.*)\(/.exec(v) !== null && k !== "html" ? ((v) => {
                    let ret = "";
                    try {
                        ret = eval(`(function ${v} )`);
                    } catch (e) {
                        ret = eval(`(${v} )`);
                    }
                    return ret
                })(v) : v) : v);

        let buildApp = new window.radbod.app();

        let views = {};

        views[componentName] = component.html;

        let store = component.data ; //? component.data.call(buildApp.dataH) : {};
        
        let compo = buildApp.createComponent(
            componentName,
            views,
            store,
            component.interactions,
            component.components
        );

        let strVws = [];

        strVws.push(`'${componentName}' : ${compo.dom.template.toString()}`);

        for (let i in compo.dom.element) {
            if (i.charAt(0) === "/") continue;
            let element = compo.dom.element[i];
            
            if (element.template) { 
                strVws.push(`'${element.id}' : ${element.template.toString()}`);
            }
        }
        // add user views
        for (let i in component.views) {
            strVws.push(`'${i}' : ${component.views[i].toString()}`);
        } 
         
               component['viewsTemplate'] = `{
       ${strVws.join(`,
       `).replace(/=""/g, '')} }`;
      

        return component;

    }


}