import React, { Component } from "react";

export default class RegularComp extends Component {
  render() {
    console.log("**** Regular Comp****");
    return <div>RegularComp {this.props.name}</div>;
  }
}
