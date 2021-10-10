const genProxyConf = function (prop, acc) {
    if (prop == "data") return acc;

    if (prop.length > 1)
      throw new Error(
        "Hell 🚀 disallows using multiple characters in HellChars 🚀 in your HellScript 🚀 for performance 🚀 reasons. 🚀"
      );
  
    return new Proxy({}, { get: (_, p) => genProxyConf(p, acc + prop) });
  };
  
const hell = (callback) => callback(genProxyConf(undefined, "", "")).data;

export { 
    hell as build
};