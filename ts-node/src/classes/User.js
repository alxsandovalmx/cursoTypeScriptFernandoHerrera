var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../data/roles"], function (require, exports, roles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Admin = exports.User4 = exports.User3 = exports.User2 = exports.User = void 0;
    roles_1 = __importDefault(roles_1);
    class User {
        constructor(name, realName, id) {
            this.name = name;
            this.realName = realName;
            this.id = id;
        }
        // Los Getters no reciben parámetros
        get rol() {
            var _a;
            return ((_a = roles_1.default.find(rol => rol.id === this.id)) === null || _a === void 0 ? void 0 : _a.descripcion) || 'not found';
        }
    }
    exports.User = User;
    class User2 {
    }
    exports.User2 = User2;
    class User3 {
    }
    exports.User3 = User3;
    class User4 {
    }
    exports.User4 = User4;
    exports.Admin = 'alexis';
});
