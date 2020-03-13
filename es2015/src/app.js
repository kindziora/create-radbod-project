
import { home } from "./page/home.js";

window.buildApp = new window.radbod.app();

var compo = buildApp.mountComponent(
    "home", home,
    (stores, data, component) => {
        
        console.log(stores, data, component);

        stores.pxy.$home.name = "affff";

        document.querySelector('#section').replaceWith(component.dom.$el);



    }
);


