import { getFiles } from './files.js';
import puppeteer from "puppeteer";
import { promises as fs } from 'fs';

const htmlProperty = /"html":".*?",/gmi;

const folderViewList = ["page", "component", "layout"];

export class compileViews {

    constructor() {

    }

    /**
     * 
     * @param {*} file 
     * @param {*} content 
     * @param {*} component 
     */
    async writeToJSFile(file, content, component) {
        let newFileData = content.replace(htmlProperty, `views : ${component.viewsTemplate},
        `);

        return await fs.writeFile(file, newFileData);
    }

    /**
     * 
     * @param {*} folder 
     * @param {*} options 
     */
    async compileMultiple(folder) {

        let rbd = await fs.readFile("./node_modules/radbod/dist/radbod.js", 'utf8');

        const browser = await puppeteer.launch({
        //    headless: false,
        //   devtools: true,
            args: ["--disable-web-security"],
        });
        const page = await browser.newPage();

        await page.setBypassCSP(true);

        await page.addScriptTag({ content: rbd });

        console.log("BUILD VIEW FOR FOLDER: " + folder);

        for await (const file of getFiles(folder || './test/todoMVC/public/build/dev/')) {

            if (file.split(".")[1] !== "js" || file.indexOf("i18n") >= 0) continue;

            if(folderViewList.filter(allowed => file.indexOf(allowed) >=0).length === 0) continue;

            console.log("BUILD VIEW: " + file);

            try {
                let component = await import(file + "?t=" + new Date());

                let content = await fs.readFile(file, 'utf8');
                let n = Object.keys(component)[0];
                component = component[n];

                if (component.html || component.views) {
                    // Get the "viewport" of the page, as reported by the page.
                    const cmp = await page.evaluate((n, componentSerialized) => {
 

                        let component = JSON.parse(componentSerialized,
                            (k, v) => typeof v === "string" ?
                                (/(.*)\(/.exec(v) !== null && k !=="html" ? ((v) => {

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
                            console.log(element);
                            if (element.template) {
                                viewsFinal[element.id] = element.template ? element.template : null;
                                strVws.push(`'${element.id}' : ${element.template.toString()}`);
                            }
                        }
                        viewsFinal[n] = compoFinal.dom.template;
                        strVws.push(`'${n}' : ${compoFinal.dom.template.toString()}`);
                        component['views'] = viewsFinal;
                        console.log(viewsFinal);
                        component['viewsTemplate'] = `{
${strVws.join(`,
`).replace(/=""/g, '')} }`;
                        
                        return component;

                    }, n, JSON.stringify(component, (k, v) => typeof v === "function" ? v.toString() : v));

                    await this.writeToJSFile(file, content, cmp);
                }


            } catch (e) {
                console.log(e);
            }

        }

        await browser.close();

    }


}