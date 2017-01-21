"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var Routing_1 = require("./components/nav/Routing");
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(Routing_1.default, null)), document.getElementById("root"));
