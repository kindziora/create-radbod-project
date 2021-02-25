import { getFile } from "./routes.js";
import { environment } from "./client.dev.js";

export class myApp extends radbod.app {
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
    loadPage(path) {
        let page = getFile(path);

        this.loading(page);

        if (this.components[page]) {
            this.render(null, null, this.components[page], path);
        } else {
            import(`./page/${page}.js`).then((module) => {
                this.mountComponent(page, module[page], (stores, data, component) => {
                    this.render(stores, data, component, path);
                });
            });

        }
    }


}

window.buildApp = new myApp(environment);

window.onpopstate = (event) => window.buildApp.loadPage(event.state);

//initial page load
window.buildApp.loadPage(window.location.pathname);