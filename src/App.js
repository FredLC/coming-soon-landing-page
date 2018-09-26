import React, { Component } from "react";
import Header from "./components/header/Header";
import Featured from "./components/featured";
import "./resources/styles.css";
import Countdown from "./components/featured/Countdown";
import Info from "./components/info";
import Highlights from "./components/highlights";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "2000px" }}>
        <Header />
        <Featured />
        <Countdown />
        <Info />
        <Highlights />
      </div>
    );
  }
}

export default App;
