import { getFile } from "./routes.js";

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
        this.environment.path = path;
        component.environment = this.environment;
        document.querySelector('#section').append(component.dom.$el);
         this.loaded(path);
    }
    /**
     * 
     * @param {*} uri 
     */
    loading(uri){ 
        document.querySelector('#status').innerHTML= "LOADING...";
    }
    /**
     * 
     * @param {*} uri 
     */
    loaded(uri){
        console.log("loaded");
        document.querySelector('#status').innerHTML= "";
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
                this.environment.path = path;
                module[page].environment = this.environment;

                this.mountComponent(page, module[page], (stores, data, component) => {
                    this.render(stores, data, component, path);
                    this.addRouting(component);
                });
            });

        }
    }

    /**
     * 
     * @param {*} component 
     */
    addRouting(component) {
        Array.from(component.dom.$el.querySelectorAll("a[data-name]")).forEach((el) => {
            let cb = (ev) =>{
                ev.preventDefault();
                this.loadPage(ev.srcElement.getAttribute("href"));
            };
            el.removeEventListener("click", cb);
            el.addEventListener("click", cb);
        });
    }
}

window.buildApp = new myApp({
    data_loader: {
        find(query, onResultCallback) {

            setTimeout(() => onResultCallback.call({ dataH: {} }, {
                name: "AK TODOS c asdfsdf sdf",
                tab: "all",
                items: [{
                    id: 0,
                    label: "Testdaten1",
                    checked: true
                }, {
                    id: 1,
                    label: "Testdaten2",
                    checked: false
                }, {
                    id: 2,
                    label: "Testdaten3",
                    checked: false
                }]
            }), 10);

        }
    }
});
 
  

window.onpopstate = (event) => window.buildApp.loadPage(event.state);

//initial page load
window.buildApp.loadPage(window.location.pathname);