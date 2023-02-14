import { React, useState } from "react";

function UseStateObjHook() {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  const handleChange = (e) => {
    setname({ ...name, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <input
          placeholder="firstName"
          onChange={handleChange}
          value={name.firstName}
          name="firstName"
        />
      </div>
      <div>
        <input
          placeholder="LastName"
          onChange={handleChange}
          value={name.lastName}
          name="lastName"
        />
      </div>
      <div>This is my first Name: {name.firstName}</div>
      <div>This is my Last Name: {name.lastName}</div>
      <div>{JSON.stringify(name)}</div>
    </>
  );
}

export default UseStateObjHook;
