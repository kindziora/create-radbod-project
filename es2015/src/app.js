


import { login } from "./page/login.js";

window.buildApp = new window.radbod.app();

var compo = buildApp.mountComponent("login", login, (stores, data, component) => {

    console.log(stores, data, component);

    // stores.pxy.$home.name = "affff";

    document.querySelector('#section').replaceWith(component.dom.$el);



}
);


