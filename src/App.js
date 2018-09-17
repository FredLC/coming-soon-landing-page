import React, { Component } from "react";
import Header from "./components/Header";
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "2000px", background: "red" }}>
        <Header />
      </div>
    );
  }
}

export default App;
