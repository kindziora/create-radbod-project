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
        return path === name ? "active" : "";
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

    date(date){
    
        try{
            let d = new Date(date.substr(0, 8));
            let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            return `${da}-${mo}-${ye}`;
        }catch(e){
            return date + e;
        }
        
        
    }
}