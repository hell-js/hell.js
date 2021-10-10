(() => {
    function genProxyConf(path) {
      return new Proxy(
        {},
        {
          get(_, prop) {
            if (prop != "data" && prop.length > 1) {
              throw new Error(
                "Hell.js does not support strings longer than one character for performance reasons."
              );
            }
  
            if (prop != "data") {
              return genProxyConf(path + prop);
            } else {
              return path;
            }
          },
        }
      );
    }
  
    function build(callback) {
      return callback(genProxyConf("")).data;
    }
  
    exports.hell = build;
})();