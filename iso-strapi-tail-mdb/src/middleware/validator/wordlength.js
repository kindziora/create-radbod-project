
import { countWords } from '../textHelper.js';

export const wordlength_validator = function (from, to) {
    return function wordlength_validator(value) {
        let cnt = countWords(value);
        return {
            isValid: cnt >= from &&  cnt <= to,
            msg: `Es sind nur ${cnt} angegeben worden, es müssen zwischen ${from} und ${to} Wörter genutzt werden.`,
            wordCount : cnt
        };
    }
   
};