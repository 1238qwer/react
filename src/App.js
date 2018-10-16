import React, { Component } from "react";
import MyName from "./MyName";
import "./App.css";

class App extends Component {
  static name = {
    name: "리액트쨩"
  };
  render() {
    return (
      <div>
        <h1>리액트</h1>
      </div>
    );
  }
}

export default App;
