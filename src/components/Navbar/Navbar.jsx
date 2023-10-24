"use client";

import React, { useState } from "react";
import NavbarView from "./NavbarView";
import { guidesURL, labURL, schedulesURL } from "@/constants/urls";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <NavbarView
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      options={navbarOptions}
    />
  );
};

export default Navbar;
