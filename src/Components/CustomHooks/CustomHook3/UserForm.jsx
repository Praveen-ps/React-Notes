import React from "react";
import useInput from "./useInput";

function UserForm() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FirstName</label>
          <input
            type="text"
            {...bindFirstName}
            // value={firstName}
            // onChange={(e) => {
            //   setFirstName(e.target.value);
            // }}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
            {...bindLastName}
            // value={lastName}
            // onChange={(e) => {
            //   setLastName(e.target.value);
            // }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
