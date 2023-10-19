"use client";

import React, { useState } from "react";
import NavbarView from "./NavbarView";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <NavbarView
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
    />
  );
};

export default Navbar;
