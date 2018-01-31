import React, { Component } from "react";

export default class App extends Component<any, any> {
  public render() {
    const myList = ["This", "is", "new", "me", "teste"];

    return (
      <ul>
        {myList.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
}
