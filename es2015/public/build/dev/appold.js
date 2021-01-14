import {getFile} from "./routes.js"; 

window.buildApp = new window.radbod.app( {
    data_loader: {
        find(options, cb) {
            setTimeout(() => cb.call({ dataH: {} }, { 
                name : "AK TODOS c asdfsdf sdf",
                items:[{
                        id: 0,
                        label: "Testdaten1",
                        checked: false
                      },{
                          id: 1,
                        label: "Testdaten2",
                        checked: false
                      }]}), 1110);
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