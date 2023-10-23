"use client";

import React, { useState } from "react";
import NavbarView from "./NavbarView";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarOptions = [
    {
      name: "Manuales",
      link: "/guides",
    },
    {
      name: "Laboratorio",
      link: "/lab",
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
