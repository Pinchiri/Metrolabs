"use client";

import React, { useState } from "react";
import NavbarView from "./NavbarView";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarOptions = [
    {
      name: "Prácticas",
      link: "/guides",
    },
    {
      name: "Laboratorios",
      //FIXME - Change for the labs info link
      link: "/guides",
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
