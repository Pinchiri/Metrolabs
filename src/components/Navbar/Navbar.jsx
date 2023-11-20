"use client";

import React, { useState } from "react";
import NavbarView from "./NavbarView";
import { guidesURL, labURL, schedulesURL } from "@/constants/urls";
import { useUserData } from "@/context/userContext";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentUser, isUserLoading } = useUserData();
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

  const handleAuth = async () => {
    if (currentUser) {
      try {
        await signOut(auth);
        router.push("/");
      } catch (error) {
        console.error("Error during logout", error);
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <NavbarView
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      options={navbarOptions}
      handleAuth={handleAuth}
      profilePicture={currentUser?.photoURL}
      user={currentUser}
      isUserLoading={isUserLoading}
    />
  );
};

export default Navbar;
