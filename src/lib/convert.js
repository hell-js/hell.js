function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)
    ) {
        // lower alpha (a-z)
        return false;
    }
    }
    return true;
}

function convertToHellJs(code) { // 🚀
    let converted = code
    .split("")
    .map((char) => {
        if (char == "") {
        return "";
        } else if (!isNaN(char)) {
        return `["${char}"]`;
        } else if (isAlphaNumeric(char)) {
        return char;
        } else {
        return `[${JSON.stringify(char)}]`;
        }
    })
    .join(".");

    return converted.replaceAll(".[", "[");
}

export { convertToHellJs }; // 🚀