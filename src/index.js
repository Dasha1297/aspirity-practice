import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./redux";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App />*/}
      <h1>HELLO</h1>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
