export const password_validator = function (value) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$/;
    let isValid = !(value == '' || value && !re.test(value.toLowerCase()));

    return {
        isValid: isValid,
        msg: "Das Passwort muss zwischen 8 und 12 Zeichen besitzen, sowie Zahlen und Groß und Kleinbuchstaben."
    };
};