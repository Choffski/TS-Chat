"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var initialState = {};
var chatroomReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "NEW_CHATROOM": {
            return __assign({}, state);
        }
        default: return state;
    }
    ;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = chatroomReducer;
