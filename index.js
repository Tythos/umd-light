/**
 * @author "Brian Kirkpatrick"
 */

if (typeof(define) === "undefined") { define = (factory) => { return factory(require, exports, module); }; }
define(function(require, exports, module) {
    const jtx = require("./lib/jtx/");

    function main() {
        console.log(jtx.Date.format(new Date(), "%Y-%m-%d"));
    }

    return Object.assign(exports, {
        "__main__": main,
        "__url__": "",
        "__semver__": "v0.1.1",
        "__license__": "",
        "__deps__": {},
        "__tests__": []
    });
});
