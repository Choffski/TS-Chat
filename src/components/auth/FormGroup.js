"use strict";
var React = require("react");
var FormGroup = function (props) {
    return (React.createElement("div", { className: "login-form-group" },
        React.createElement("label", { htmlFor: props.name, className: "control-label" }, props.label),
        React.createElement("div", { className: "login-form-group--input-wrapper" },
            React.createElement("input", { required: props.required, type: props.type, value: props.value, className: "form-control", id: props.name, name: props.name, placeholder: props.placeholder, onChange: props.handleChange }))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FormGroup;
