/**
 * @author "Brian Kirkpatrick"
 */

if (typeof(define) !== "function" || define.amd !== true) {
	// specify a commonjs-compatible define() factory hook
	define = (factory) => module.exports = factory(require, {}, module);
}
define(function(require, _, module) {
    const jtx = require("./lib/jtx");

    function main() {
        console.log(jtx.Date.format(new Date(), "%Y-%m-%d"));
    }

    return Object.assign({}, {
        "__main__": main,
        "__url__": "https://github.com/Tythos/yarnbox2.git",
        "__semver__": "v0.1.1",
        "__license__": "",
        "__deps__": {},
        "__tests__": []
    });
});
if (module.id === "." && module.exports.__main__) { module.exports.__main__(); }
