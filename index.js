/**
 * @author "Brian Kirkpatrick"
 */

if (typeof(define) === "undefined") { define = (definer) => { return definer(require, exports, module); }; }
define(function(require, exports, module) {
    return Object.assign(exports, {
        "__url__": "",
        "__semver__": "v0.1.0",
        "__license__": "",
        "__deps__": {},
        "__tests__": []
    });
});