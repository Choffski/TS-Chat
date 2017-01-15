"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var Login_1 = require("../auth/Login");
var Signup_1 = require("../auth/Signup");
var AppContainer_1 = require("../main/AppContainer");
var Routing = (function (_super) {
    __extends(Routing, _super);
    function Routing() {
        return _super.apply(this, arguments) || this;
    }
    Routing.prototype.render = function () {
        return (React.createElement(react_router_1.Router, { history: react_router_1.hashHistory },
            React.createElement(react_router_1.Route, { path: "/login", component: Login_1.default }, " "),
            React.createElement(react_router_1.Route, { path: "/signup", component: Signup_1.default }, " "),
            React.createElement(react_router_1.Route, { path: "/main", component: AppContainer_1.default }),
            React.createElement(react_router_1.Redirect, { from: "/", to: "/login" })));
    };
    return Routing;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routing;
