import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Router } from "./Router";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
