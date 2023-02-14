import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchAxiosWithHook() {
  const [post, setpost] = useState({});
  const [id, setID] = useState(1);
  const [fetchID, setFetchID] = useState(0);
  useEffect(() => {
    if (fetchID) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${fetchID}`)
        .then((res) => {
          console.log(res.data);
          setpost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fetchID]);
  const fetchPost = () => {
    setFetchID(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <button type="button" onClick={fetchPost}>
        Fetch Post
      </button>
      <h3>{post.title}</h3>
    </div>
  );
}

export default FetchAxiosWithHook;
