"use strict";
var redux_1 = require("redux");
var chatroom_1 = require("./chatroom");
var user_1 = require("./user");
var messages_1 = require("./messages");
var combined = redux_1.combineReducers({
    chats: chatroom_1.default,
    users: user_1.default,
    messages: messages_1.default
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = combined;
