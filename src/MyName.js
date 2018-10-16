import React, { Component } from "react";
import App from "./App.js";

class MyName extends Component {
  static defaultProps = {
    name: "기본d이름"
  };

  static props = {
    name: "우웅"
  };

  render() {
    return (
      <div>
        안녕안뇽안융! 제 이름은 <b>{App.name.name}}</b>입니다.
      </div>
    );
  }
}

export default MyName;
