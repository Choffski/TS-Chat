"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var user_1 = require("../../actions/user");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var LoginForm_1 = require("./LoginForm");
var SignupForm_1 = require("./SignupForm");
var react_bootstrap_1 = require("react-bootstrap");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this._showSignup = function () {
            _this.setState({ showSignup: !_this.state.showSignup });
        };
        _this._handleLogin = function (e) {
            _this.props.dispatch(user_1.login(_this.state.inputUsername, _this.state.inputPassword)).then(function (resp) {
                window.sessionStorage["token"] = resp.data;
                react_router_1.hashHistory.push("/main");
            });
        };
        _this._handleChange = function (e) {
            e.preventDefault();
            _this.setState((_a = {}, _a[e.target.name] = e.target.value, _a));
            var _a;
        };
        delete window.sessionStorage["token"];
        _this.state = {
            showSignup: false,
            forgot: false,
            inputUsername: "",
            inputPassword: ""
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { className: "Login" },
            React.createElement(react_bootstrap_1.Jumbotron, { className: "login-jumbotron" }, this.state.showSignup ?
                React.createElement(SignupForm_1.default, { handleShowForm: this._showSignup.bind(this) })
                :
                    React.createElement(LoginForm_1.default, { handleShowForm: this._showSignup.bind(this), username: this.state.inputUsername, password: this.state.inputPassword, handleSubmit: this._handleLogin, handleChange: this._handleChange }))));
    };
    ;
    return Login;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect()(Login);
