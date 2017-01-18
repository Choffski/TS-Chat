"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var FormGroup_1 = require("./FormGroup");
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        return _super.apply(this, arguments) || this;
    }
    LoginForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", { className: "form-horinzontal login-form" },
            React.createElement("fieldset", null,
                React.createElement("legend", null, " Login "),
                React.createElement(FormGroup_1.default, { required: "true", type: "text", name: "inputUserName", placeholder: "Enter Username..", label: "Username" }),
                React.createElement(FormGroup_1.default, { required: "true", type: "password", name: "inputPassword", placeholder: "Enter Password..", label: "Password" })),
            React.createElement("div", { className: "login-form-buttonbar" },
                React.createElement("button", { type: "submit", className: "btn btn-yellow" }, "Login")),
            React.createElement("div", { className: "login-form-buttonbar" },
                React.createElement("span", null, " Forgot your password? ")),
            React.createElement("div", { className: "login-form-buttonbar" },
                React.createElement("span", { onClick: function () { return _this.props.handleShowForm(); } }, " Not a member yet?"))));
    };
    ;
    return LoginForm;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginForm;
