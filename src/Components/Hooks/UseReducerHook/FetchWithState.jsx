import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchWithState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setError("");
        setPost(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError(error);
      });
  }, []);
  return (
    <div>
      {loading ? "Loading...." : post.title}
      {error ? "Something Went Wrong" : null}
    </div>
  );
}

export default FetchWithState;
