import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/store";
import App from "./App";
import { Provider } from "react-redux";
import setup from "./services/setupInterceptors";

const state = store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

setup(state);
