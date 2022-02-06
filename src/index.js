import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./redux/store";
import App from "./App";
import { Provider } from "react-redux";
import setup from "./redux/services/setupInterceptors";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

setup(store);
