import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  mouseLogPosition = (e) => {
    console.log("mouse event");
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.mouseLogPosition);
  }
  render() {
    const { x, y } = this.state;
    return (
      <div>
        ClassMouse X-{x} and Y-{y}
      </div>
    );
  }
}

export default ClassMouse;
