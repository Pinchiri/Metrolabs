import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { footerColors } from "@/utils/footerUtils/footerColors";

const CampusAddressFooter = ({ textColor, supportEmail }) => {
  return (
    <div className="space-y-2">
      <h2 className={`font-bold text-lg ${footerColors[textColor]}`}>
        DIRECCIÓN
      </h2>
      <p>
        Distribuidor Universidad Av. Boyacá con autopista Petare-Guarenas.
        Urbanización Terrazas del Ávila, Caracas-Miranda. Zona postal 1073
      </p>
      <p>Email: {supportEmail}</p>
      {/* Iconos de redes sociales */}
      <div className="flex space-x-2 mt-2">
        <div className="bg-[#6DC8F2] p-3 transition-transform hover:scale-105 ">
          <Link href="https://twitter.com/unimet">
            <TwitterIcon style={{ color: "white" }} />
          </Link>
        </div>

        <div className="bg-[#2B6CAE] p-3 transition-transform hover:scale-105 ">
          <Link href="https://www.linkedin.com/school/unimet-ve/">
            <LinkedInIcon style={{ color: "white" }} />
          </Link>
        </div>

        <div className="bg-[#CA2A21] p-3 transition-transform hover:scale-105  ">
          <Link href="https://www.youtube.com/user/canalunimet">
            <YouTubeIcon style={{ color: "white" }} />
          </Link>
        </div>

        <div className="bg-[#5098D7] p-3 transition-transform hover:scale-105 ">
          <Link href="https://www.facebook.com/unimet">
            <FacebookIcon style={{ color: "white" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampusAddressFooter;
