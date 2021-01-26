export const required_validator = function (value) {
    return {
        isValid: typeof value !=="undefined" && !!value,
        msg: "Dies ist ein Pflichtfeld"
    };
};