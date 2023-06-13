const PROXY_CONFIG = {
    "/": {
        "target": "https://gateway.marvel.com",
        "secure": false,
        "bypass": function (req, res, proxyOptions) {
            // if (req.headers.accept.indexOf("html") !== -1) {
            //     console.log("Skipping proxy for browser request.");
            //     return "/index.html";
            // }
            req.headers["X-Custom-Header"] = "yes";
            return null
        }
    },
}

module.exports = PROXY_CONFIG;