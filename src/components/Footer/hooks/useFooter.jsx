"use client";
import { generalFooterLinks } from "@/utils/footerUtils/generalFooterLinks";
import { useState } from "react";

export const useFooter = () => {
  const [footerColor, setFooterColor] = useState("primary");
  const [footerLinks, setFooterLinks] = useState(generalFooterLinks);

  return { footerColor, setFooterColor, footerLinks, setFooterLinks };
};
