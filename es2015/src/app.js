
import { home } from "./page/home.js";

let buildApp = new window.radbod.app();

let compo = buildApp.mountComponent(
    "home", home,
    (stores, data, component) => {
        
        console.log(stores, data, component);

        document.querySelector('#section').replaceWith(component.$el);

    }
);
