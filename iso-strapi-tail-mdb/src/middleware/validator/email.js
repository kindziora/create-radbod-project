export const mail_validator = function (value) {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let isValid = !(value == '' || !re.test(value));

    return {
        isValid: isValid,
        msg: "E-mail ist nicht gültig"
    };
};