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

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      setIsUserLoading(true);
      if (user) {
        const isProfessor = user.email.endsWith("@unimet.edu.ve");
        setCurrentUser({ ...user, isProfessor });
      } else {
        setCurrentUser(user);
        console.log("else");
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
