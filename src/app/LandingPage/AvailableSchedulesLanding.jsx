import React from "react";
import girlAsset from "../../assets/girl-asset.png";
import calendarImage from "../../assets/calendar-image.png";
import LinkToPage from "./LinkToPage";

const AvailableSchedulesLanding = () => {
  return (
    <div className="w-full flex flex-col lg:justify-center lg:flex-row mt-10 xl:mt-0 mb-10">
      <p className="text-stratos px-4 tracking-tighter text-3xl sm:text-5xl lg:self-center lg:w-1/2 font-b612 font-bold">
        Consulta los horarios disponibles del laboratorio
      </p>
      <div className="flex flex-col justify-center w-full lg:w-auto">
        <div className="flex justify-center">
          <img
            src={girlAsset.src}
            alt="Girl Asset"
            className="h-1/2 lg:h-[350px] w-1/2 lg:w-[170px] mt-40 relative z-10 animate-fade-right"
          />
          <img
            src={calendarImage.src}
            alt="Girl Asset"
            className="h-2/3 lg:h-[460px] w-2/3 lg:w-[272px] mt-10 -ml-24 relative animate-fade-left"
          />
        </div>
        <div className="self-end mr-8 -mt-6 sm:mt-2">
          <LinkToPage
            text={"Ver horarios"}
            link="/classSchedules"
          />
        </div>
      </div>
    </div>
  );
};

export default AvailableSchedulesLanding;
