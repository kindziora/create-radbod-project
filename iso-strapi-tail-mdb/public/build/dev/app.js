import { getFile } from "./config/routes.js";

/**
 * shared components
 */
import { topmenu } from './component/topmenu.js';

export class myApp extends radbod.app {

    constructor(environment) {
        super(environment);

        this.mountComponent("topmenu#mainmenu", topmenu, function (stores, data, component)  {
            console.log(stores, data, component);
            try{
                document.querySelector('#mytopmenu').innerHTML = "";
                document.querySelector('#mytopmenu').append(component.dom.$el);
            }catch(e){
                console.log(e);
            }
          
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
     * @param {*} path 
     */
    loadPage(path, callback) {
        let page = getFile(path);

        this.loading(page);

        if (this.components[page]) {
            this.render(null, null, this.components[page], path);
            if (typeof callback === "function")
                callback(this.components[page]);
        } else {
            import(`./page/${page}.js`).then((module) => {
                this.mountComponent(page, module[page], (stores, data, component) => {
                    this.render(stores, data, component, path);
                    if (typeof callback === "function")
                        callback(component);
                });
            });

        }
    }


}
import { environment } from "./config/client.dev.js";

window.buildApp = new myApp(environment);