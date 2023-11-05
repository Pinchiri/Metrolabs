"use client"
import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../../firebase.js";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>
    {children}
  </UserContext.Provider>;
};
