import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import * as logger from 'redux-logger';

import combined from "./reducers";

const middleware = applyMiddleware(logger(), thunk);

export default createStore(combined, middleware);
