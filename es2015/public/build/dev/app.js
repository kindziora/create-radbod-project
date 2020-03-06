
import {home} from "./page/home.js";

let buildApp = new window.radbod.app();

console.log(buildApp);

let compo = buildApp.createComponent(
    "home",
    home.views,
    home.data.call(buildApp.dataH),
    home.interactions(),
    home.components
);
