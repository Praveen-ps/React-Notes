import React from "react";

function ListeRendering() {
  let arr = ["jack", "mendis", "kein", "Kevin"];
  const newArr = arr.map((name, index) => {
    <h1 key={index}>{name}</h1>;
  });
  return <div>{newArr}</div>;
}

export default ListeRendering;
