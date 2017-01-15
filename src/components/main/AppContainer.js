"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AppContainer = (function (_super) {
    __extends(AppContainer, _super);
    function AppContainer() {
        return _super.apply(this, arguments) || this;
    }
    AppContainer.prototype.render = function () {
        return (React.createElement("div", { className: "AppContainer" },
            React.createElement("h3", null, " This Is AppContainer")));
    };
    return AppContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppContainer;
