"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var LoginForm_1 = require("./LoginForm");
var SignupForm_1 = require("./SignupForm");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this._showSignup = function () {
            _this.setState({ showSignup: !_this.state.showSignup });
        };
        _this.state = {
            showSignup: false,
            forgot: false
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { className: "Login" },
            React.createElement("div", { className: "jumbotron login-jumbotron" }, this.state.showSignup ?
                React.createElement(SignupForm_1.default, { handleShowForm: this._showSignup.bind(this) })
                :
                    React.createElement(LoginForm_1.default, { handleShowForm: this._showSignup.bind(this) }))));
    };
    ;
    return Login;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
