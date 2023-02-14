import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `you have ${this.state.count} time clicked`;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState.count !== this.state.count) {
      document.title = `you have ${this.state.count} time clicked`;
    }
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    const { count, name } = this.state;
    return (
      <>
        <input onChange={this.handleChange} value={name} />
        <button onClick={this.handleClick}>button is clicked {count}</button>
      </>
    );
  }
}

export default ClassCounter;
