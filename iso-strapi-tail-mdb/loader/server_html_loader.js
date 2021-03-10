
import { i18n } from './_t.js';
import { fetchDataStores, lookupComponents } from "./readComponents.js"
import { environment } from "../config/server.dev.js";

import {
    dataHandler,
    eventHandler,
    getFile,
    translations
} from "../config/env.js";

import { promises as fs } from 'fs';
const regexSectionHead = /<extend-head[\w\s\d-'"=]*\>(.*)<\/extend-head>/igs;
const REGEX_HEAD = (data) => data.match(regexSectionHead) ? [...data.matchAll(regexSectionHead)][0][1] : "<title>";

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


function getModules(meta) {
    let mod = (e) => `<script type="module" src="${e.path}"></script>`;
    meta.loaded.push({ path: "/app.js" });
    meta.loaded.push({ path: "/index.js" });
    return meta.loaded.map(mod).join("\n\r");
}

function getCSS(meta) {
    //  let mod = (e) => e.style ? `<style>${e.style}</style>` : undefined;
    //  return meta.loaded.map(mod).join("\n\r");
    return "";
}

let componentsHandler = {};

export const html_loader = asyncHandler(async function (req, res, next) {

    let dataH = new dataHandler(new eventHandler(), environment);

    let path = req.path;

    let pageName = getFile(path);

    console.log("./public/build/dev/page/" + pageName + ".js");

    let page = await import("../public/build/dev/page/" + pageName + ".js");

    let count = await lookupComponents(page[pageName], 0, componentsHandler);
    let met = { cnt: 0, loaded: [] };

    fetchDataStores(page[pageName], componentsHandler, (data, component) => {


        if (typeof component.loaded === "function") {
            environment.path = () => path;
            component.environment = environment;
            component.loaded.call(component, data);
        }

    }, (stores, meta) => {

        let renderedHTML = '';

        let _t = (text, lang) => internationalize._t(text, lang);

        let storeData = stores.store.toObject();

        try {

            let pageHTML = eval(`(${page[pageName].views[pageName].toString()})`).call(stores, { change: { value: "" }, ...storeData, _t });

            let layoutStore = stores.createStore("index", {
                html: pageHTML.replace(regexSectionHead, ""),
                head: REGEX_HEAD(pageHTML),
                js: getModules(meta),
                css: getCSS(meta),
                env: { language: "en_EN" },
            });

            renderedHTML = eval("(( index, _t )=>`" + layout + "`)").apply(stores, [layoutStore.data, _t]);

        } catch (e) {
            console.log(renderedHTML, pageName, e);
        }
        res.send(renderedHTML);

        next();

    }, count, met, dataH, pageName);


});