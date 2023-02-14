import React, { Component } from "react";
import FRInput from "./FRInput";

export default class RefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  clickHandler = () => {
    // console.log(this.inputRef);
    this.inputRef.current.focus();
  };
  render() {
    return (
      <>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click me</button>
      </>
    );
  }
}
