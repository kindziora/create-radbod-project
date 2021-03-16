export const mail_validator = function (value) {
    let re = /^[äöüßa-zA-Z0-9._-]+@[äöüßa-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let isValid = !(value == '' || !re.test(value.toLowerCase()));

    return {
        isValid: isValid,
        msg: "E-mail ist nicht gültig"
    };
};