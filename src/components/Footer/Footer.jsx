import ContactUsFooter from "./ContactUsFooter";
import CampusInfoFooter from "./CampusInfoFooter";
import CampusAddressFooter from "./CampusAddressFooter";
import CopyrightFooter from "./CopyrightFooter";
import InterestLinksFooter from "./InterestLinksFooter";

const Footer = ({ links, footerColor }) => {
  const supportEmail = "soportevirtual@unimet.edu.ve";

  return (
    <>
      <div className="bg-[#FAFAFA] px-5 py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Contáctenos */}
        <ContactUsFooter
          supportEmail={supportEmail}
          textColor={footerColor}
        />

        {/* Enlaces de Interés */}
        <InterestLinksFooter
          textColor={footerColor}
          links={links}
        />

        {/* Campus Puerto La Cruz y Lechería */}
        <CampusInfoFooter
          textColor={footerColor}
          links={links}
        />

        {/* Dirección */}
        <CampusAddressFooter
          supportEmail={supportEmail}
          textColor={footerColor}
        />
      </div>

      {/* Copyright */}
      <CopyrightFooter />
    </>
  );
};

export default Footer;
