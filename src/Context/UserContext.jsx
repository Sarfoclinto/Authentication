import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {
      email: "",
      password: "",
      userToken: "",
    }
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
