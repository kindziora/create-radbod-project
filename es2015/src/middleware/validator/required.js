export const required_validator = function (value) {
    return {
        result: typeof value !=="undefined" && !!value,
        msg: "Dies ist ein Pflichtfeld"
    };
};