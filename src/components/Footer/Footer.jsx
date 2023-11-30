"use client";
import { useFooter } from "./hooks/useFooter";
import FooterView from "./FooterView";

const Footer = () => {
  const { footerColor, footerLinks } = useFooter();
  const supportEmail = "soportevirtual@unimet.edu.ve";
  return (
    <FooterView
      supportEmail={supportEmail}
      footerColor={footerColor}
      links={footerLinks}
    />
  );
};

export default Footer;
