import React from "react";
import ReactDOM from "react-dom";
import "./dist/scss/style.scss";
import "./assets/themify-icons/themify-icons.css";
import "./assets/fontawesome-icons/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

let Intstore = {
  dataCollection: [],
  demoData: []
};

function dataStore(state = Intstore, action) {
  switch (action.type) {
    case "newValue":
      return {
        ...state,
        dataCollection: action.payload
      };
    case "data":
      return {
        ...state,
        demoData: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(dataStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
