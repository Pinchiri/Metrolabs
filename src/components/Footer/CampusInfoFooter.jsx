import { footerColors } from "@/utils/footerUtils/footerColors";
import React from "react";

const CampusInfoFooter = ({ textColor }) => {
  return (
    <div className="space-y-2">
      <h2 className={`font-bold text-lg ${footerColors[textColor]}`}>
        CAMPUS PUERTO LA CRUZ Y LECHERÍA
      </h2>
      <p>
        Dirección Puerto La Cruz Av. Municipal con calle Carabobo, Centro
        Seguros La Previsora
      </p>
      <p>(0424)-854.61.46</p>
      <p>Dirección Lechería Calle El Dorado, CC Guaica Center</p>
      <p>(0281)-281.45.30</p>
    </div>
  );
};

export default CampusInfoFooter;
