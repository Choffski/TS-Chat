"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SignupForm = (function (_super) {
    __extends(SignupForm, _super);
    function SignupForm() {
        return _super.apply(this, arguments) || this;
    }
    SignupForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", { className: "form-horinzontal login-form" },
            React.createElement("fieldset", null,
                React.createElement("legend", null, " Sign Up "),
                React.createElement("div", { className: "login-form-group" },
                    React.createElement("label", { htmlFor: "inputEmail", className: "control-label" }, "Email"),
                    React.createElement("div", { className: "login-form-group--input-wrapper" },
                        React.createElement("input", { required: true, type: "text", className: "form-control", id: "inputEmail", placeholder: "Enter Email.." }))),
                React.createElement("div", { className: "login-form-group" },
                    React.createElement("label", { htmlFor: "inputUsername", className: "control-label" }, "Username"),
                    React.createElement("div", { className: "login-form-group--input-wrapper" },
                        React.createElement("input", { required: true, type: "text", className: "form-control", id: "inputUsername", placeholder: "Select Username, this can be changed later.." }))),
                React.createElement("div", { className: "login-form-group" },
                    React.createElement("label", { htmlFor: "inputPassword", className: "control-label" }, "Password"),
                    React.createElement("div", { className: "login-form-group--input-wrapper" },
                        React.createElement("input", { required: true, type: "password", className: "form-control", id: "inputPassword", placeholder: "Select Password.." }))),
                React.createElement("div", { className: "login-form-group" },
                    React.createElement("label", { htmlFor: "reinputPassword", className: "control-label" }, "Re-enter Password"),
                    React.createElement("div", { className: "login-form-group--input-wrapper" },
                        React.createElement("input", { required: true, type: "password", className: "form-control", id: "reinputPassword", placeholder: "Re-enter Password.." })))),
            React.createElement("div", { className: "login-form-buttonbar" },
                React.createElement("button", { href: "#", onClick: function () { return _this.props.handleShowForm(); }, className: "btn btn-dgrey" }, " Back "),
                React.createElement("button", { type: "submit", className: " btn btn-yellow" }, "Sign up"))));
    };
    ;
    return SignupForm;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupForm;
