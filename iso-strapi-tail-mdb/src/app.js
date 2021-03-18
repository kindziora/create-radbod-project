import { parseRoute } from "./config/routes.js";

/**
 * shared components
 */
import { topmenu } from './component/topmenu.js';
import { bottommenu } from './component/bottommenu.js';

export class myApp extends radbod.app {

    constructor(environment, $appEL) {

        environment.view.path = () => window.location.pathname;

        super(environment);
        this.$appEL = $appEL;
        this.sharedComponents = {};

        this.mountComponent("topmenu#mainmenu", topmenu, (stores, data, component) => {
            this.sharedComponents["topmenu#mainmenu"] = component;
        });

        this.mountComponent("bottommenu#footermenu", bottommenu, (stores, data, component) => {
            this.sharedComponents["bottommenu#footermenu"] = component;
        });

    }


    /**
     * 
     * @param {*} stores 
     * @param {*} data 
     * @param {*} component 
     * @param {*} path 
     */
    render(stores, data, component, path) {
        let title = component.dom.$el.querySelector('title') ? component.dom.$el.querySelector('page').innerTEXT : path;
        history.pushState(path, title, path);
        document.querySelector('#section').innerHTML = "";
        document.querySelector('#section').append(component.dom.$el);
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
    renderSharedComponents(component) {

        for (let i in this.sharedComponents) {
            let tagName = i.split("#")[0] + "-component";
            let shared = component.dom.$el.getElementsByTagName(tagName);
            if (shared[0]) {
                shared[0].appendChild(this.sharedComponents[i].dom.$el);
                if(this.sharedComponents[i].interactions[tagName] && this.sharedComponents[i].interactions[tagName]["postRender"]){
                    this.sharedComponents[i].interactions[tagName]["postRender"]();
                }
            }

        }
        if(component.interactions[component.getName()] && component.interactions[component.getName()]["postRender"]){
            component.interactions[component.getName()]["postRender"]();
        }
    }

    /**
     * 
     * @param {*} path 
     * @param {*} callback 
     */
    loadPage(path, callback) {
        let routeInfo = parseRoute(path);
        let page = routeInfo.filename;

        this.setLanguage(routeInfo.language);

        this.loading(page);

        if (this.components[page]) {

            this.renderSharedComponents(this.components[page]);

            this.render(null, null, this.components[page], path);
            if (typeof callback === "function")
                callback(this.components[page]);
        } else {
            import(`./page/${page}.js`).then((module) => {
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