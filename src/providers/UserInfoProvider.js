import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserInfoProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserInfoProvider;
