"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Signup = (function (_super) {
    __extends(Signup, _super);
    function Signup() {
        return _super.apply(this, arguments) || this;
    }
    Signup.prototype.render = function () {
        return (React.createElement("div", { className: "Signup" },
            React.createElement("h3", null, " This Is Signup")));
    };
    return Signup;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Signup;
