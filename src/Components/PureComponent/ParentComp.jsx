import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Praveen",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Praveen" });
    }, 2000);
  }
  render() {
    console.log("**********Parent Component*******");
    return (
      <>
        <div>ParentComp</div>
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </>
    );
  }
}

export default ParentComp;
