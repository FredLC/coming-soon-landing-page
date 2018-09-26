import React, { Component } from "react";
import Header from "./components/header/Header";
import Featured from "./components/featured/index";
import "./resources/styles.css";
import { Countdown } from "./components/featured/Countdown";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "2000px", background: "blue" }}>
        <Header />
        <Featured />
        <Countdown />
      </div>
    );
  }
}

export default App;
