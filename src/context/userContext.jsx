"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChangedListener } from "../../firebase.js";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  isUserLoading: false,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      setIsUserLoading(true);
      if (
        user &&
        (user.email.endsWith("@unimet.edu.ve") ||
          user.email.endsWith("@correo.unimet.edu.ve"))
      ) {
        console.log(user);
      }
      setIsUserLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, isUserLoading, setIsUserLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserData() {
  return useContext(UserContext);
}
