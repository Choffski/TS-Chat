import { combineReducers } from "redux";

import chatroomReducer from "./chatroom";
import usersReducer from "./user";
import messagesReducer from "./messages";

const combined = combineReducers({
  chats: chatroomReducer,
  users: usersReducer,
  messages: messagesReducer
});

export default combined;
