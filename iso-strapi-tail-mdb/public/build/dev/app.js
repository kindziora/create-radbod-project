import { parseRoute } from "./config/routes.js";
import cookie from './deps/cookie.js';
/**
 * shared components
 */
import { topmenu } from './component/topmenu.js';
import { bottommenu } from './component/bottommenu.js';
import { modal } from './component/modal.js';
import { breadcrumb } from './component/breadcrumb.js';
import { backend } from './middleware/strapi.js';


export class myApp extends radbod.app {

    constructor(environment, $appEL) {

        environment.view.path = () => window.location.pathname;

        environment.data_loader = new backend(environment);
        try {
            let tk = cookie.get('tk'); 
            if (tk) {
                environment.data_loader.setAuthToken(tk);
                environment.data_loader.setUser(JSON.parse(cookie.get('user')));
            }
        } catch (e) {
            console.log(e);
        }

        super(environment);
        this.$appEL = $appEL;
        this.sharedComponents = {};

        this.mountComponent("topmenu#mainmenu", topmenu, (stores, data, component) => {
            this.sharedComponents["topmenu#mainmenu"] = component;
        });

        this.mountComponent("bottommenu#footermenu", bottommenu, (stores, data, component) => {               
            this.sharedComponents["bottommenu#footermenu"] = component;
        });

        this.mountComponent("modal#partial", modal, (stores, data, component) => {
            this.sharedComponents["modal#partial"] = component;
        });

        if(environment.data_loader.getUser()) {
            this.mountComponent("breadcrumb#breadcrumb", breadcrumb, (stores, data, component) => {
                this.sharedComponents["breadcrumb#breadcrumb"] = component;
            });
        }
       

        this.cookie = cookie;
    }


    /**
     * 
     * @param {*} stores 
     * @param {*} data 
     * @param {*} component 
     * @param {*} path 
     */
    render(stores, data, component, path) { 

        document.querySelector('#section').innerHTML = "";
        document.querySelector('#section').append(component.dom.$el);

        if (component.interactions[component.getName()] && component.interactions[component.getName()]["postRender"]) {
            component.interactions[component.getName()]["postRender"].call(this, component);
        }
        this.loaded(path);
    }

    /**
     * 
     * @param {*} uri 
     */
    loading(uri) {
        document.querySelector('.progress-bar').classList.remove("loaded");
        document.querySelector('.progress-bar').classList.add("loading");
    }
    /**
     * 
     * @param {*} uri 
     */
    loaded(uri) {
        console.log("loaded");
        document.querySelector('.progress-bar').classList.remove("loading");
        document.querySelector('.progress-bar').classList.add("loaded");
    }

    /**
     * 
     * @param {*} component 
     */
    renderSharedComponents(component, recall) {

        for (let i in this.sharedComponents) {
            let tagName = i.split("#")[0] + "-component";
            let shared = component.dom.$el.getElementsByTagName(tagName);
            if (shared[0]) {
                shared[0].appendChild(this.sharedComponents[i].dom.$el);
                if (this.sharedComponents[i].interactions[tagName] && this.sharedComponents[i].interactions[tagName]["postRender"]) {
                    this.sharedComponents[i].interactions[tagName]["postRender"](component);
                }
                this.dataH.events.dispatchEvent(i.split("#")[0] , `/$${i.split("#")[0] }`, "post_render", { change: {}, domScope: this.sharedComponents[i].dom.$el, readd: false }, this.dataH.store.toObject());

                this.renderSharedComponents(this.sharedComponents[i], true);

            }

        }
        if(!recall){
            this.dataH.events.dispatchEvent(component.name, `/$${component.name}`, "post_render", { change: {}, domScope: component.dom.$el, readd: false }, this.dataH.store.toObject());
        }
    }

    /**
     * 
     * @param {*} path 
     * @param {*} callback 
     */
    loadPage(path, callback) {
        let routeInfo = parseRoute(path);
        let page = routeInfo.filename.split("/").pop().split(".")[0];

        this.setLanguage(routeInfo.language);

        this.loading(page);

       // let title = component.dom.$el.querySelector('title') ? component.dom.$el.querySelector('page').innerTEXT : path;
        /**
         * @TODO put title and meta infos in js component file as attributes
         */

        history.pushState(path, path, path);

        if (this.components[page]) {  
            this.components[page].loadStores();
            this.renderSharedComponents(this.components[page]);
            this.render(null, null, this.components[page], path);
            
            if (typeof callback === "function")
                callback(this.components[page]);
        } else {
            import(`./${routeInfo.filename}`).then((module) => {
               
                this.mountComponent(page, module[page], (stores, data, component) => {
                    this.render(stores, data, component, path);
                    this.renderSharedComponents(this.components[page]);

                    if (typeof callback === "function")
                        callback(component);
                });
            }).catch((err) => {
                console.log(err);
                //    this.loadPage("notFound");
            });

        }
    }

}

import { environment } from "./config/client.dev.js";

window.buildApp = new myApp(environment, document.querySelector('#section'));