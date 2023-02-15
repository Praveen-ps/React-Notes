import React, { Component } from "react";

class TimerClass extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <p>Timer: {this.state.timer}</p>
        <button
          onClick={() => {
            clearInterval(this.interval);
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default TimerClass;
