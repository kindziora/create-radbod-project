import { getFile } from "./config/routes.js";

/**
 * shared components
 */
import { topmenu } from './component/topmenu.js';

export class myApp extends radbod.app {

    constructor(environment, $appEL) {
        super(environment);
        this.$appEL = $appEL;
        this.sharedComponents = {};
        
        this.mountComponent("topmenu#mainmenu", topmenu,  (stores, data, component) => {
            this.sharedComponents["topmenu#mainmenu"] = component;
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
        document.querySelector('#status').innerHTML = "LOADING...";
    }
    /**
     * 
     * @param {*} uri 
     */
    loaded(uri) {
        console.log("loaded");
        document.querySelector('#status').innerHTML = "";
    }

    /**
     * 
     * @param {*} component 
     */
    renderSharedComponents(component) {

        for(let i in this.sharedComponents){
            let tagName = i.split("#")[0] + "-component";
            let shared = component.dom.$el.getElementsByTagName(tagName);
            if(shared[0]){
                shared[0].appendChild(this.sharedComponents[i].dom.$el);
            }
        }

    }

    /**
     * 
     * @param {*} path 
     */
    loadPage(path, callback) {
        let page = getFile(path);

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
            });

        }
    }

}

import { environment } from "./config/client.dev.js";

window.buildApp = new myApp(environment, document.querySelector('#section'));