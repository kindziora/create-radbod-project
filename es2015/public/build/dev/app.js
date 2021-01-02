import {getFile} from "./routes.js"; 

window.buildApp = new window.radbod.app();

function addRouting(stores, data, component) {
    Array.from(component.dom.$el.querySelectorAll("a[data-name]")).forEach((el)=>{ 
        el.addEventListener("click", function(ev){
            ev.preventDefault();
            window.buildApp.loadPage(this.getAttribute("href"));
        });
    });
}

window.buildApp.loadPage = function(path) {
    let page = getFile(path);
    import(`./page/${page}.js`).then((module) => {
        var compo = buildApp.mountComponent(page, module[page], (stores, data, component) => {

            let title = component.dom.$el.querySelector('title')? component.dom.$el.querySelector('page').innerTEXT: page;

            history.pushState(path, title, path);

            console.log(stores, data, component);
    
            // stores.pxy.$home.name = "affff";
    
            addRouting(stores, data, component);
            
            document.querySelector('page').replaceWith(component.dom.$el.querySelector('page'));

    
        });
    });

};

window.onpopstate = function(event) {
    window.buildApp.loadPage(event.state);
}

window.buildApp.loadPage(window.location.pathname);
