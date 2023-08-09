define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunctionArrow = exports.genericFunction = exports.printObject = void 0;
    const printObject = (arg) => {
        console.log(arg);
    };
    exports.printObject = printObject;
    function genericFunction(arg) {
        return arg;
    }
    exports.genericFunction = genericFunction;
    const genericFunctionArrow = (arg) => {
        return arg;
    };
    exports.genericFunctionArrow = genericFunctionArrow;
});
