import { getFiles, folderViewList, parseFunction } from './files.js';
import puppeteer from "puppeteer";
import { promises as fs } from 'fs';

import { parse, stringify } from 'flatted';
 
const htmlProperty = /"html":".*?",/gmi;
const viewProperty = /(views(["']|)\s*?:\s*)/mig;


const componentObjectString = /export.*?\s({.*})/gims;

/**
 * @todo
 * bei den view functionen könnte eine weitere stufe eingeführt werden.
 * 
 * {
                   'topmenu-e-1' : function (args) { let {change, todo,topmenu, _t} = args; return `<div class="logo"><img src="/img/topmenu/logo64.png" alt="no image"></div> <div class="hamburger" data-events="hamburger:click"> <div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div> </div> <ul id="menu"> <li data-name="/$topmenu/link"><a href="/home" class="${topmenu.isActive('home')}">${_t('home')}</a></li> <li data-name="/$topmenu/link"><a href="/form" class="${topmenu.isActive('form')}">${_t('form')}</a></li> <li data-name="/$topmenu/link"><a href="/extra" class="${topmenu.isActive('extra')}">${_t('extra')}</a></li> </ul>`},
                   'topmenu-e-2' : function (args) { let {change, todo,topmenu, _t} = args; return `<img src="/img/topmenu/logo64.png" alt="no image">`},
                   'topmenu-e-4' : function (args) { let {change, todo,topmenu, _t} = args; return `<div class="hamburg"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`},
                   'topmenu-e-5' : function (args) { let {change, todo,topmenu, _t} = args; return `<span class="line"></span> <span class="line"></span> <span class="line"></span>`},
                   'topmenu-e-9' : function (args) { let {change, todo,topmenu, _t} = args; return `<li data-name="/$topmenu/link"><a href="/home" class="${topmenu.isActive('home')}">${_t('home')}</a></li> <li data-name="/$topmenu/link"><a href="/form" class="${topmenu.isActive('form')}">${_t('form')}</a></li> <li data-name="/$topmenu/link"><a href="/extra" class="${topmenu.isActive('extra')}">${_t('extra')}</a></li>`},
                   'topmenu-e-10' : function (args) { let {change, todo,topmenu, _t} = args; return `<a href="/home" class="${topmenu.isActive('home')}">${_t('home')}</a>`},
                   'topmenu-e-11' : function (args) { let {change, todo,topmenu, _t} = args; return `${_t('home')}`},
                   'topmenu-e-12' : function (args) { let {change, todo,topmenu, _t} = args; return `<a href="/form" class="${topmenu.isActive('form')}">${_t('form')}</a>`},
                   'topmenu-e-13' : function (args) { let {change, todo,topmenu, _t} = args; return `${_t('form')}`},
                   'topmenu-e-14' : function (args) { let {change, todo,topmenu, _t} = args; return `<a href="/extra" class="${topmenu.isActive('extra')}">${_t('extra')}</a>`},
                   'topmenu-e-15' : function (args) { let {change, todo,topmenu, _t} = args; return `${_t('extra')}`},
                   'topmenu' : function (args) { let {change, todo,topmenu, _t} = args; return `<navgation data-id="topmenu-e-1" data-view="topmenu-e-1"> <div class="logo" data-id="topmenu-e-2" data-view="topmenu-e-2"><img src="/img/topmenu/logo64.png" alt="no image" data-id="topmenu-e-3" data-view="topmenu-e-3"></div> <div class="hamburger" data-events="hamburger:click" data-id="topmenu-e-4" data-view="topmenu-e-4"> <div class="hamburg" data-id="topmenu-e-5" data-view="topmenu-e-5"> <span class="line" data-id="topmenu-e-6" data-view="topmenu-e-6"></span> <span class="line" data-id="topmenu-e-7" data-view="topmenu-e-7"></span> <span class="line" data-id="topmenu-e-8" data-view="topmenu-e-8"></span> </div> </div> <ul id="menu" data-type="list" data-id="topmenu-e-9" data-view="topmenu-e-9"> <li data-name="/$topmenu/link" data-id="topmenu-e-10" data-view="topmenu-e-10"><a href="/home" class="${topmenu.isActive('home')}" data-id="topmenu-e-11" data-view="topmenu-e-11">${_t('home')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-12" data-view="topmenu-e-12"><a href="/form" class="${topmenu.isActive('form')}" data-id="topmenu-e-13" data-view="topmenu-e-13">${_t('form')}</a></li> <li data-name="/$topmenu/link" data-id="topmenu-e-14" data-view="topmenu-e-14"><a href="/extra" class="${topmenu.isActive('extra')}" data-id="topmenu-e-15" data-view="topmenu-e-15">${_t('extra')}</a></li> </ul> </navgation>`} 
                }
 innerhalb der string templates könnten aufrufe auf die jeweiligen view functionen stehen, damit würde die Größe reduziert und SSR würde vllt besser gehen
 */













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

        let fncPath = "_fnc_" + file.split("/").pop();
        let l = file.split("/");
        l.pop();
        l.push(fncPath);
       // await fs.writeFile( l.join("/"), newFileData);
       await fs.writeFile(file, newFileData);
    }

    async setupPuppeteer() {

        const browser = await puppeteer.launch({
     //       headless: false,
    //        devtools: true, 
       dumpio: true,
            args: ["--disable-web-security"],
        });
        const page = await browser.newPage();

        await page.setBypassCSP(true);
        await page.addScriptTag({ path: "./node_modules/radbod/dist/radbod.js" });
        await page.addScriptTag({ path: "./public/build/dist/full.bundle.js" });
        
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

        for await (const file of getFiles(folder)) {

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
                let compiledComponent;

                try {
                    compiledComponent = parse(await page.evaluate(this.insidePuppeteer, componentName, componentSerialized));
                    if (compiledComponent.error) {
                        throw compiledComponent;
                    }
                    await this.writeToJSFile(file, compiledComponent);
                } catch (e) {
                    console.log(e);
                }

            }

        } catch (e) {
            console.log(e);
        }

    }

    insidePuppeteer =   async (componentName, componentSerialized) => {
        function timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

      
        let Flatted = function (n) {
            "use strict";
               /*! (c) 2020 Andrea Giammarchi */var t = JSON.parse, r = JSON.stringify, e = Object.keys, a = String, u = "string", f = {}, i = "object", c = function (n, t) { return t }, l = function (n) { return n instanceof a ? a(n) : n }, o = function (n, t) { return typeof t === u ? new a(t) : t }, s = function (n, t, r) { var e = a(t.push(r) - 1); return n.set(r, e), e }; return n.parse = function (n, r) { var u = t(n, o).map(l), s = u[0], p = r || c, v = typeof s === i && s ? function n(t, r, u, c) { for (var l = [], o = e(u), s = o.length, p = 0; p < s; p++) { var v = o[p], y = u[v]; if (y instanceof a) { var g = t[y]; typeof g !== i || r.has(g) ? u[v] = c.call(u, v, g) : (r.add(g), u[v] = f, l.push({ k: v, a: [t, r, g, c] })) } else u[v] !== f && (u[v] = c.call(u, v, y)) } for (var h = l.length, d = 0; d < h; d++) { var w = l[d], O = w.k, S = w.a; u[O] = c.call(u, O, n.apply(null, S)) } return u }(u, new Set, s, p) : s; return p.call({ "": v }, "", v) }, n.stringify = function (n, t, e) { for (var a = t && typeof t === i ? function (n, r) { return "" === n || -1 < t.indexOf(n) ? r : void 0 } : t || c, f = new Map, l = [], o = [], p = +s(f, l, a.call({ "": n }, "", n)), v = !p; p < l.length;)v = !0, o[p] = r(l[p++], y, e); return "[" + o.join(",") + "]"; function y(n, t) { if (v) return v = !v, t; var r = a.call(this, n, t); switch (typeof r) { case i: if (null === r) return r; case u: return f.get(r) || s(f, l, r) }return r } }, n
        }({});
        
        let component = JSON.parse(componentSerialized,
            (k, v) => typeof v === "string" ?
                (/(.*)\(/.exec(v) !== null && k !== "html" ? ((v) => {
                    let ret = "";
                    try {
                        ret = eval(`(function ${v} )`);
                    } catch (e) {
                        try {
                            ret = eval(`(${v})`);
                        } catch (e) {
                            ret = v;
                        }
                    }
                    return ret
                })(v) : v) : v);


        //let buildApp = new buildApp();

        //window.buildApp
        let views = {};

        views[componentName] = component.html;

        let store;
        let orherErrors = [];
        try{
            store =  component.data.call(buildApp.dataH);
        }catch(e) {
            console.log(e);
            orherErrors.push(e);
            store = {};
        }
        
        try {
            let compo = buildApp.createComponent(
                componentName,
                store,
                component
            );
         //  await timeout(1000);
            let strVws = [];

          //  strVws.push(`'${componentName}' : ${compo.dom.template.toString()}`);
          

            for (let i in compo.dom.element) {
                if (i.charAt(0) === "/") continue;
                
                let element = compo.dom.element[i]; 
 
                if (typeof element.template === "function") {
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

                
            return Flatted.stringify(component);
        } catch (e) { 
            console.log(e, component);
            return Flatted.stringify({ "error": {orherErrors, name: componentName, component: component, e} });
        }


    }


}