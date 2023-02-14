import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./CompA";
function CompC() {
  const name = useContext(UserContext);
  const channel = useContext(ChannelContext);
  {
    /*
    This is how it is used before useContext Hook introduction
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    {user}-{channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div> */
  }
  return (
    <>
      <h1>
        {name}-{channel}
      </h1>
    </>
  );
}

export default CompC;
