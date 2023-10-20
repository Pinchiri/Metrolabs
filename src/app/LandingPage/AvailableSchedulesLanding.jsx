import React from "react";
import girlAsset from "../../assets/girl-asset.png";
import calendarImage from "../../assets/calendar-image.png";
import LinkToPage from "../LinkToPage";

const AvailableSchedulesLanding = () => {
  return (
    <div className="w-full flex flex-col mt-10 mb-10">
      <p className="text-stratos px-4 text-3xl font-b612 font-bold">
        Consulta los horarios disponibles del laboratorio
      </p>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-center">
          <img
            src={girlAsset.src}
            alt="Girl Asset"
            className="h-1/2 w-1/2 mt-40 relative z-10 animate-fade-right"
          />
          <img
            src={calendarImage.src}
            alt="Girl Asset"
            className="h-2/3 w-2/3 mt-10 -ml-24 relative animate-fade-left"
          />
        </div>
        <div className="self-end mr-8 -mt-6">
          <LinkToPage text={"Ver horarios"} />
        </div>
      </div>
    </div>
  );
};

export default AvailableSchedulesLanding;
