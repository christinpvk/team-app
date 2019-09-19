import React, { Component } from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pre-loader">
          <Loader
            type="TailSpin"
            color="#034694"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
