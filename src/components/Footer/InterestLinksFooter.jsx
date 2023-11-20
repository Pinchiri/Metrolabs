import { footerColors } from "@/utils/footerUtils/footerColors";
import React from "react";
import Link from "next/link";

const InterestLinksFooter = ({ links, textColor }) => {
  return (
    <div className="space-y-2 ">
      <h2 className={`font-bold text-lg ${footerColors[textColor]}`}>
        ENLACES DE INTERÉS
      </h2>
      <ul className="list-none space-y-1">
        {links.map((link, index) => (
          <Link href={link.href}>
            <li
              key={index}
              className="mb-2 transition-transform hover:scale-105 hover:translate-x-1.5"
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default InterestLinksFooter;
