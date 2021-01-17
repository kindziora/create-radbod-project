
import { i18n } from './_t.js';

import {
    dataHandler,
    eventHandler,
    getFile,
    translations
} from "../config/env.js";

import { promises as fs } from 'fs';


const REGEX_TITLE = (data) => data.match(/<title.*\>((.*))<\/title>/i) ? data.match(/<title.*\>((.*))<\/title>/i)[1] : "Default title";

let layout;
(async function () {
    layout = await fs.readFile("./src/layout/index.html", 'utf8');
})()


let internationalize = new i18n();
internationalize.addTranslation(translations);

const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next)

const enviroment = {
    data_loader: {
        find(options, cb) {
            setTimeout(() => cb.call({ dataH: {} }, { name: "test load asynchronous server",    items: [{
                id: 0,
                label: "Testdaten1 server",
                checked: false
            }, {
                id: 1,
                label: "Testdaten2 server",
                checked: false
            }, {
                id: 2,
                label: "Testdaten3 server",
                checked: false
            }]}), 0);
        }
    }
};

function fetchData(component, cb, allready, total, meta, dataH) {
   
    let callback = function (meta) {
        return (data) => {
            cb(data, meta);
            meta.cnt++;
            meta.loaded.push(component);
            if (meta.cnt >= total && !meta.calledFinal) {
                meta.calledFinal = true;
                 allready(dataH, meta);
            }
        }
    };

    let result = component.data.call(dataH, callback(meta), {});

    if (!result || typeof result.then !== "function") {
        meta.cnt++;
        meta.loaded.push(component);
    }

    for (let i in component.components) {
        fetchData(component.components[i], cb, allready, total, meta, dataH);
    }

    if (meta.cnt >= total && !meta.calledFinal) {
         
        console.log("allready");
        meta.calledFinal = true;
        allready(dataH, meta);
    }
}

function countForData(component, cnt) {
    for (let i in component.components)
        cnt = countForData(component.components[i], cnt);
    return ++cnt;
}

function getModules(meta) {
    let mod = (e) => `<script type="module" src="${e.path}"></script>`;
    meta.loaded.push({ path: "/app.js" });
    return meta.loaded.map(mod).join("\n\r");
}

function getCSS(meta) {

}

export const html_loader = asyncHandler(async function (req, res, next) {

    let dataH = new dataHandler(new eventHandler(), enviroment);

    let path = req.path;

    let pageName = getFile(path);

    console.log("./public/build/dev/page/" + pageName + ".js");

    import("../public/build/dev/page/" + pageName + ".js").then(function (page) {

        let count = countForData(page[pageName], 0);
        let met = { cnt: 0, loaded: [] };

        fetchData(page[pageName], (data) => {

            console.log("fetched datastore", data);

        }, (stores, meta) => {

            let renderedHTML = '';

            let _t = (text, lang) => internationalize._t(text, lang);

            let storeData = stores.store.toObject();

            try {

                console.log(page[pageName]);

                let pageHTML = eval(`(${page[pageName].views[pageName].toString()})`).call(stores, { change: { value: "" }, ...storeData, _t });

                let layoutStore = stores.createStore("index", {
                    html: pageHTML,
                    title: REGEX_TITLE(pageHTML),
                    js: getModules(meta),
                    css: getCSS(meta),
                    env: { language: "en_EN" },
                    head: ""
                });

                renderedHTML = eval("(( index, _t )=>`" + layout + "`)").apply(stores, [layoutStore.data, _t]);

            } catch (e) {
                console.log(renderedHTML,pageName, e);
            }
            res.send(renderedHTML);

            next();

        }, count, met, dataH);
    }).catch((e)=>{

        console.log("ERROR CATCH ",e);

    });

});