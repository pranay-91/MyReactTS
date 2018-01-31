import React, { Component } from "react";

export default class App extends Component<any, any> {
  render() {
    const myList = ["This", "is", "a", "me", "teste"];

    return (
      <ul>
        {myList.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    );
  }
}
