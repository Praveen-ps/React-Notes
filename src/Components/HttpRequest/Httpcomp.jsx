import axios from "axios";
import React, { Component } from "react";

class Httpcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.setState({ post: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: "error retiriving data" });
      });
  }

  render() {
    const { post, error } = this.state;
    return (
      <div>
        {post.length
          ? post.map((post) => <div key={post.id}>{post.name}</div>)
          : null}
        {error.length ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default Httpcomp;
