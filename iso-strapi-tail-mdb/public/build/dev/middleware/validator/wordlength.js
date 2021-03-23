
import { countWords } from '../textHelper.js';

export const wordlength_validator = function (value) {
    let cnt = countWords(value);
    return {
        isValid: cnt >= 150,
        msg: `Es sind nur ${cnt} von mindestens 150 Wörtern angegeben worden.`,
        wordCount : cnt
    };
};