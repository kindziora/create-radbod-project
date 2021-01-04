import {getFile} from "./routes.js"; 

window.buildApp = new window.radbod.app( {
    data_loader: {
        find(options, cb) {
            setTimeout(() => cb.call({ dataH: {} }, { name: "test load asynchronous client site" }), 0);
        }
    }
});

window.buildApp.loadPage = function(path) {
    
    let page = getFile(path);

    if(buildApp.components[page]) {
        
        render(null, null, buildApp.components[page], path);
    }else{
        import(`./page/${page}.js`).then((module) => { 
            var compo = buildApp.mountComponent(page, module[page], (stores, data, component)=> {
                render (stores, data, component, path);
                addRouting(component);
            });
             
        });
    
    }

   
};

function render(stores, data, component, path) {
    let title = component.dom.$el.querySelector('title') ? component.dom.$el.querySelector('page').innerTEXT: page;
    history.pushState(path, title, path); 
    document.querySelector('#section').innerHTML = "";
    
    document.querySelector('#section').append(component.dom.$el);
}

function addRouting(component) {
    Array.from(component.dom.$el.querySelectorAll("a[data-name]")).forEach((el)=>{ 
        el.addEventListener("click", function(ev){
            ev.preventDefault();
            window.buildApp.loadPage(this.getAttribute("href"));
        });
    });
}

window.onpopstate = (event) => window.buildApp.loadPage(event.state);

window.buildApp.loadPage(window.location.pathname);