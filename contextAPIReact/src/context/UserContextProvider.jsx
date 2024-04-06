import UserContext from "./UserContext";

import React from "react";

function UserContextProvider({ children }) {
    const  [user, setUser] = React.useState(null);
  return <UserContext.Provider>{children}</UserContext.Provider>;
}

export default UserContextProvider;
