"use client";
import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../../firebase.js";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // Aquí se agrega el atributo isProfessor
        const isProfessor = user.email.endsWith("@unimet.edu.ve");
        setCurrentUser({ ...user, isProfessor });
      } else {
        setCurrentUser(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
