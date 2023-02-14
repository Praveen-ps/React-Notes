import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchAxiosWithHook() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <input type="text" />
      {posts.map((post) => {
        return <h3 key={post.id}>{post.title}</h3>;
      })}
    </div>
  );
}

export default FetchAxiosWithHook;
