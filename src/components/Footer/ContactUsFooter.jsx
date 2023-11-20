import { footerColors } from "@/utils/footerUtils/footerColors";
import React from "react";

const ContactUsFooter = ({ supportEmail, textColor }) => {
  return (
    <div className="space-y-2">
      <h2 className={`font-bold text-lg ${footerColors[textColor]}`}>
        CONTÁCTENOS
      </h2>
      <p>{supportEmail}</p>
    </div>
  );
};

export default ContactUsFooter;
