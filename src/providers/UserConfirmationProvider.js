import React, { createContext, useState } from "react";

export const UserConfirmationContext = createContext();

const UserConfirmationProvider = ({ children }) => {
  const [userDeleteConfirmation, setUserDeleteConfirmation] = useState({
    uid: "",
    isOpen: false,
    status: "",
  });
  return (
    <UserConfirmationContext.Provider
      value={{ userDeleteConfirmation, setUserDeleteConfirmation }}
    >
      {children}
    </UserConfirmationContext.Provider>
  );
};

export default UserConfirmationProvider;
