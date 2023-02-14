import React from "react";
import CompB from "./CompB";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// check in the app component for how it is wraped
function CompA() {
  return (
    <div>
      <CompB />
    </div>
  );
}

export default CompA;
