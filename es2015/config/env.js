export const settings = {
   radbod_build: "./node_modules/radbod/build/",
   project_path : "./"
}

export {dataHandler} from "./node_modules/radbod/build/dataHandler.js";
export {eventHandler} from "./node_modules/radbod/build/eventHandler.js";
export {mergeDeep} from "./node_modules/radbod/server/merge.js";
export {getFiles} from "./node_modules/radbod/server/files.js";
export {getFile} from "./routes.js";
export {translations} from "../public/build/dev/i18n/app_translations.js";