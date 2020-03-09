
import {home} from "./page/home.js";

let buildApp = new window.radbod.app();

console.log(buildApp);

let compo = buildApp.mountComponent(
    "home", home,
    (stores, data, component)=>  {
        console.log(stores, data, component);
    }
);
