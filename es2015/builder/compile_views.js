import { getFiles, folderViewList, parseFunction } from './files.js';
import puppeteer from "puppeteer";
import { promises as fs } from 'fs';


const htmlProperty = /"html":".*?",/gmi;
const viewProperty =/(views(["']|)\s*?:\s)/mig;


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
            
            if(m[0] === "{") {
                openMatch++;
            }

            if(m[0] === "}") {
                openMatch--;
            }

            if(openMatch === 0) return m[0].length + m.index;

        }
    }


    toCode(obj, str) {

        for (let i in obj) {
           
            if (obj.hasOwnProperty(i)) {
                if (typeof obj[i] === "object") {
                    str.push(`"${i}" : { ${this.toCode(obj[i], [])} }`) ;
                }else if (typeof obj[i] === "function") {
                    let fn = obj[i].toString();
                    
                    str.push(`"${i}" :  ${parseFunction(fn).toString()}`);
 
                }else if(typeof obj[i] === "string" ){
                    str.push(`"${i}" : \`${obj[i]}\``);
                }else{
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

                    console.log(v);

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
    async writeToJSFile(file, content, component, comp, name) {
        let newFileData = content;
        try {
 
            let m = Array.from(content.matchAll(viewProperty))[0];

            if(m) {
                let startStr = content.substr(m.index);
                let objStr = startStr.substr(0, this.parseParanthesisReturnEnd(startStr));
                content = content.replace(objStr, "").replace(/,\s*,/g, ",").replace(",,", ",");
            }

              newFileData = content.replace(htmlProperty, `views : ${component.viewsTemplate},
            `);

        } catch (e) {
            console.log(e);
        }

        await fs.writeFile(file, newFileData);


    }

    /**
     * 
     * @param {*} folder 
     * @param {*} options 
     */
    async compileMultiple(folder) {

        let rbd = await fs.readFile("./node_modules/radbod/dist/radbod.js", 'utf8');

        const browser = await puppeteer.launch({
             //   headless: false,
           //    devtools: true,
            args: ["--disable-web-security"],
        });
        const page = await browser.newPage();

        await page.setBypassCSP(true);

        await page.addScriptTag({ content: rbd });

        console.log("BUILD VIEW FOR FOLDER: " + folder);

        for await (const file of getFiles(folder || './test/todoMVC/public/build/dev/')) {

            if (file.split(".")[1] !== "js" || file.indexOf("i18n") >= 0) continue;

            if (folderViewList(file)) continue;

            console.log("BUILD VIEW: " + file);

            try {
                let component = await import(file + "?t=" + new Date());
                let content = await fs.readFile(file, 'utf8');
                let n = Object.keys(component)[0];
                component = component[n];



                if (component.html || component.views) {
                    // Get the "viewport" of the page, as reported by the page.
                    let cmp = await page.evaluate((n, componentSerialized) => {

                        let component = JSON.parse(componentSerialized,
                            (k, v) => typeof v === "string" ?
                                (/(.*)\(/.exec(v) !== null && k !== "html" ? ((v) => {

                                    console.log(v);

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

                        console.log("NAME:", n, component);

                        views[n] = component.html;

                        let store = component.data ? component.data.call(buildApp.dataH) : {};
                        let compo = buildApp.createComponent(
                            n,
                            views,
                            store,
                            component.interactions(),
                            component.components
                        );
                        views[n] = compo.dom.$el.innerHTML;

                        //now we have an enriched and view generated code and html template strings
                        let compoFinal = buildApp.createComponent(
                            n,
                            views,
                            store,
                            component.interactions(),
                            component.components
                        );

                        let viewsFinal = {};
                        let strVws = [];

                        for (let i in compoFinal.dom.element) {
                            let element = compoFinal.dom.element[i];

                            if (element.template) {

                                viewsFinal[element.id] = element.template ? element.template : null;

                                //  if(typeof component['views'] !== "undefined" && typeof component['views'][element.id] === "undefined"  )
                                strVws.push(`'${element.id}' : ${element.template.toString()}`);
                            }
                        }
                        viewsFinal[n] = compoFinal.dom.template;

                        strVws.push(`'${n}' : ${compoFinal.dom.template.toString()}`);
                        if (component.views) {
                            for (let vfn in component.views) {
                                strVws.push(`'${vfn}' : ${component.views[vfn].toString()}`);
                            }
                        }

                        component['views'] = viewsFinal;

                        component['viewsTemplate'] = `{
${strVws.join(`,
`).replace(/=""/g, '')} }`;

                        return component;

                    }, n, JSON.stringify(component, (k, v) => typeof v === "function" ? v.toString() : v));

                    await this.writeToJSFile(file, content, cmp, component, n);
                }


            } catch (e) {
                console.log(e);
            }

        }

        await browser.close();

    }


}