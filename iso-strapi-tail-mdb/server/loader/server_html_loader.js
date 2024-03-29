
import { fetchDataStores, lookupComponents } from "./readComponents.js"
import { environment } from "../../config/server.dev.js";

import {
    dataHandler,
    eventHandler,
    parseRoute,
    translations
} from "../../config/env.js";

import { promises as fs } from 'fs';

import {backend} from '../../src/middleware/strapi.js';

const regexSectionHead = /<extend-head[\w\s\d-'"=]*\>(.*)<\/extend-head>/igs;
const REGEX_HEAD = (data) => data.match(regexSectionHead) ? [...data.matchAll(regexSectionHead)][0][1] : "<title>";

let layout;
(async function () {
    layout = await fs.readFile("./src/layout/index.html", 'utf8');
})();

const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next)


function getModules(meta) {
    let mod = (e) => `<script type="module" src="${e.path}"></script>`;

    meta.loaded = []; //empty because it's not needed to load deps because of import modules in es6

    meta.loaded.push({ path: "/app.js" });
    meta.loaded.push({ path: "/index.js" });
    
    return meta.loaded.map(mod).join("\n\r");
}

function getPageCSS(e) {
    return `<style>${e.style}</style>`;
}

function getAllCSS(meta) {
    let mod = (e) => e.style ? `<style>${e.style}</style>` : undefined;
    return meta.loaded.map(mod).join("\n\r");
    return "";
}

let componentsHandler = {};

let authHandler = new backend(environment);

export const html_loader = asyncHandler(async function (req, res, next) {
    environment.data_loader = authHandler;

    let dataH = new dataHandler(new eventHandler(), environment);
 
    let path = req.path;

    let routeInfo = parseRoute(path);

    if(routeInfo.private) {
        let _no_auth = "403 Access denied";
        let ck = authHandler.parseCookie(req.headers.cookie);
        if(ck && ck.tk) {
            authHandler.setAuthToken(ck.tk);
            authHandler.setUser(ck.user);
            let auth = await authHandler.isAuthorized();
   
            if(!auth){
                return res.status(403).send(_no_auth);
            } 
        }else{
            return res.status(403).send(_no_auth);
        }
    } 

    if(path.split("/").pop().split(".").length > 1){
        //regular file
        next();
        return;
    }

    let pageName = routeInfo.filename.split("/").pop().split(".")[0];
 
    dataH.internationalize.addTranslation(translations);
    dataH.internationalize.setLanguage(routeInfo.language);

    console.log("./public/build/dev/" + routeInfo.filename, routeInfo);

    let page = await import("../../public/build/dev/" + routeInfo.filename);

    let count = await lookupComponents(page[pageName], 0, componentsHandler);
    let met = { cnt: 0, loaded: [] };

    environment.view.path = (name) => path;
   
     
    fetchDataStores(page[pageName], componentsHandler, (data, component) => {

        dataH.internationalize.addTranslation(typeof component.translations === "function" ? component.translations.call() : component.translations);
          
        component.environment = environment;

        if (typeof component.loaded === "function") {

            component.loaded.call(component, componentsHandler[pageName]);
        }

    }, (stores, meta) => {

        let renderedHTML = '';

        let _t = (text, lang) => stores.internationalize._t(text, lang);

        let storeData = stores.store.toObject();
 

        try {

            console.log(stores);
            
            let pageHTML = eval(`(${page[pageName].views[pageName].toString()})`).call(stores, { change: { value: "" }, ...storeData, _t, env: dataH.environment });

            let layoutStore = stores.createStore("index", {
                html: pageHTML.replace(regexSectionHead, ""),
                head: REGEX_HEAD(pageHTML),
                js: getModules(meta),
                css: getPageCSS(page[pageName]),
                env: { language: routeInfo.language },
            });

            renderedHTML = eval("(( index, _t )=>`" + layout + "`)").apply(stores, [layoutStore.data, _t]);

        } catch (e) {
            console.log(renderedHTML, pageName, e);
        }

        res.send(renderedHTML);

        next();
    }, count, met, dataH, pageName);


});