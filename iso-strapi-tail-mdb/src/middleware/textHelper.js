export const countWords = function (text) {
    let normalizedText = text.replace(/(\r\n|\n|\r)/gm, " ").replace(/^\s+|\s+$/g, "")
        .replace("&nbsp;", " ");

    normalizedText = strip(normalizedText);

    let re = /\s+/;
    let words = normalizedText.split(re);

    re = /^([\s\t\r\n]*)$/;
    for (let wordIndex = words.length - 1; wordIndex >= 0; wordIndex--) {
        if (!words[wordIndex] || words[wordIndex].match(re)) {
            words.splice(wordIndex, 1);
        }
    }

    return (words.length);
}

export const strip = function (html) { 
    let tmp = document.createElement("div"); 
    tmp.innerHTML = html; 
    if (tmp.textContent == "" && typeof tmp.innerText == "undefined") {
        return "";
    } 
    return tmp.textContent || tmp.innerText;
}
