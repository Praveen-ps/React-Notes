import { React, useState } from "react";

function UseStateArrHook() {
  const [items, setItems] = useState([]);
  const handleClick = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  const handleDel = () => {
    // const newArr = [...items];
    // newArr.pop();
    items.pop();
    setItems([...items]);
  };
  return (
    <>
      <button onClick={handleClick}>Add number</button>
      <button onClick={handleDel}>Del number</button>

      {items.length ? (
        items.map((item) => <div key={item.id}>{item.value}</div>)
      ) : (
        <div>No item in the list</div>
      )}
    </>
  );
}

export default UseStateArrHook;
