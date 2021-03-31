
import { mergeDeep } from "../config/env.js";

export class i18n {

    constructor() {
        this.language = "de_DE";
        this.translation = { en_EN: {} };
    }

    /**
     * 
     * @param {*} translationData 
     */
    addTranslation(translationData) {
        this.translation = mergeDeep(this.translation, translationData);
    }

    _t(text, language) {
        if (typeof language === "undefined") {
            language = this.language;
        }

        if (this && typeof this.translation[language] !== "undefined" && typeof this.translation[language][text] !== "undefined") {
            return this.translation[language][text];
        }
        return text;
    }

    setLanguage(language) {
        this.language = language;
    }

    getLanguage() {
        this.language;
    }

    getLanguages() {
        return Object.keys(this.translation);
    }

}