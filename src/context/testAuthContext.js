import { createContext, useEffect, useState } from "react";

export const TestAuthContext = createContext();

export const TestAuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = (user) => {
    // TO DO
    setCurrentUser(user);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <TestAuthContext.Provider value={{ currentUser, login }}>
      {children}
    </TestAuthContext.Provider>
  );
};
