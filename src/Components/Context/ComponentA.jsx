import React from "react";
import ComponentB from "./ComponentB";
import { UserProvider } from "./ContextComp";

function ComponentA() {
  return (
    <UserProvider value="praveen">
      <ComponentB />
    </UserProvider>
  );
}
export default ComponentA;
