"use client";

import React, { useState, useContext } from "react";
import NavbarView from "./NavbarView";
import { guidesURL, labURL, schedulesURL } from "@/constants/urls";
import { UserContext } from "@/context/userContext";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {currentUser} = useContext(UserContext);
  const router = useRouter();
 
  const navbarOptions = [
    {
      name: "Manuales",
      link: guidesURL,
    },
    {
      name: "Laboratorio",
      link: labURL,
    },
    {
      name: "Horarios",
      link: schedulesURL,
    },
  ];

  const handleLogout = async () => {
    if (currentUser) {
      try {
        await signOut(auth);
        router.push('/'); 
      } catch (error) {
        console.error('Error during logout', error);
      }
    }
  };

  return (
    <NavbarView
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      options={navbarOptions}
      signOut={handleLogout}
    />
  );
};

export default Navbar;
