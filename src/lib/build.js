let identifier = (Math.random() + 1).toString(36).substring(3);

const buildProxy = function (prop, acc) {
  if (prop == identifier) return acc;

  if (prop.length > 1)
    throw new Error(
      "Hell 🚀 disallows using multiple characters in HellChars 🚀 in your HellScript 🚀 for performance 🚀 reasons. 🚀"
    );

  return new Proxy({}, { get: (_, p) => buildProxy(p, acc + prop) });
};

function hell(callback) {
  let proxy = callback(buildProxy("", ""));
  if (Array.isArray(proxy)) {
    return proxy.map((p) => p[identifier]).join("");
  } else {
    return proxy[identifier];
  }
}

export { hell as build };
