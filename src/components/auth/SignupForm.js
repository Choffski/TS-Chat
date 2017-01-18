"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var FormGroup_1 = require("./FormGroup");
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
                React.createElement(FormGroup_1.default, { name: "inputEmail", required: "true", label: "Email", placeholder: "Enter Email..", type: "text" }),
                React.createElement(FormGroup_1.default, { name: "inputUsername", required: "true", label: "Username", placeholder: "Select Username (can be changed)", type: "text" }),
                React.createElement(FormGroup_1.default, { name: "inputPassword", required: "true", label: "Password", placeholder: "Enter Password..", type: "password" }),
                React.createElement(FormGroup_1.default, { name: "reinputPassword", required: "true", label: "Re-enter password", placeholder: "Re-enter Password..", type: "password" })),
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
