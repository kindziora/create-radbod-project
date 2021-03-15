const REGEX_LANGUAGE = /([a-z]{2}_[A-Z]{2})/;

/**
 * 
 * @param {*} context 
 * @returns 
 */
export class viewFunctions {
    
    /**
     * 
     * @param {*} context 
     */
    constructor(context){
        this.context = context;
    }

    /**
     * 
     * @returns 
     */
    getLanguage() {
        return this.path().match(REGEX_LANGUAGE) ? this.path().match(REGEX_LANGUAGE)[1] : false;
    }

    /**
     * 
     * @returns 
     */
    path() {
        return this.context.path();
    }

    /**
     * 
     * @param {*} name 
     * @param {*} path 
     * @returns 
     */
    isActive(name, path) {
        path = path || this.path();
        path = path.replace(/(\/[a-z]{2}_[A-Z]{2})/, "");
        return path.split("/")[1] === name ? "active" : "";
    }

    /**
     * 
     * @param {*} pageName 
     * @param {*} language 
     * @returns 
     */
    url(pageName, language) {
        return [language || this.getLanguage() ||"" , pageName].join("/");
    }
}