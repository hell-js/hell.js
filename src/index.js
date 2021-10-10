const genProxyConf = function (_, prop, acc) {
    if (prop == "data") return acc;
  
    if (prop.length > 1)
      throw new Error(
        "Hell.js does not support strings longer than one character for performance reasons."
      );
  
    return new Proxy({}, { get: (t, p) => genProxyConf(t, p, acc + prop) });
  };
  
module.exports.hell = (callback) => callback(genProxyConf(undefined, "", "")).data;