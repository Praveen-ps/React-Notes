import axios from "axios";
import React, { Component } from "react";

class HttpPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      number: "",
      updatedAt: "",
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    console.log(this.state);
  };
  handleUpdate = () => {
    const article = { name: "React PUT Request Example" };
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", article)
      .then((response) => {
        console.log(response);
        return this.setState({ updatedAt: response.data.updatedAt });
      });
  };

  render() {
    const { userName, email, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userName"
              placeholder="name"
              onChange={this.changeHandler}
              value={userName}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              value={number}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Sumbit</button>
        </form>
        <button type="button" onClick={this.handleUpdate}>
          Click
        </button>
        {/* <button onClick={showState} /> */}
      </div>
    );
  }
}

export default HttpPost;
