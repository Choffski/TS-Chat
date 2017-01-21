import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import Routing from "./components/nav/Routing";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


ReactDOM.render(
<Provider store={store}>
  <Routing />
</Provider>,
document.getElementById("root"));
