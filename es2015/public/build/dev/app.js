import { getFile } from "./routes.js";
//import { radbod } from "./deps/radbod.js";

export class myApp extends radbod.app {

    render(stores, data, component, path) {
        let title = component.dom.$el.querySelector('title') ? component.dom.$el.querySelector('page').innerTEXT : page;
        history.pushState(path, title, path);
 
        document.querySelector('#section').append(component.dom.$el);
        this.loaded(path);
    }

    loading(uri){
        document.querySelector('#section').innerHTML = "<span id='loading'>LOADING...</span>";
    }

    loaded(uri){
        console.log("loaded");
        document.querySelector('#section #loading').remove();
    }

    loadPage(path) {
        let page = getFile(path);

        this.loading(page);

        if (this.components[page]) {
            this.render(null, null, this.components[page], path);
        } else {
            import(`./page/${page}.js`).then((module) => {
                this.mountComponent(page, module[page], (stores, data, component) => {
                    this.render(stores, data, component, path);
                    this.addRouting(component);
                });
            });

        }
    }

    addRouting(component) {
        Array.from(component.dom.$el.querySelectorAll("a[data-name]")).forEach((el) => {
            el.addEventListener("click", (ev) =>{
                ev.preventDefault();
                this.loadPage(ev.srcElement.getAttribute("href"));
            });
        });
    }
}

window.buildApp = new myApp({
    data_loader: {
        find(options, cb) {
            setTimeout(() => cb.call({ dataH: {} }, {
                name: "AK TODOS c asdfsdf sdf",
                items: [{
                    id: 0,
                    label: "Testdaten1",
                    checked: false
                }, {
                    id: 1,
                    label: "Testdaten2",
                    checked: false
                }]
            }), 1110);
        }
    }
});
 
  

window.onpopstate = (event) => window.buildApp.loadPage(event.state);
window.buildApp.loadPage(window.location.pathname);