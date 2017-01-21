"use strict";
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var logger = require("redux-logger");
var reducers_1 = require("./reducers");
var middleware = redux_1.applyMiddleware(logger(), redux_thunk_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.createStore(reducers_1.default, middleware);
