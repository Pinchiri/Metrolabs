import React from "react";
import girlAsset from "../assets/girl-asset.png";
import calendarImage from "../assets/calendar-image.png";
import Link from "next/link";

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
        <Link
          //FIXME - Change href to schedules view
          href="/"
          className="self-end flex flex-row gap-4 items-center text-masala font-medium text-md mr-10 -mt-6 hover:scale-110 hover:font-bold transform transition-all"
        >
          Ver horarios{" "}
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.70028 5.87365C5.70028 6.07765 5.63185 6.28164 5.49528 6.43717L1.19546 11.3316C0.921938 11.643 0.478469 11.643 0.205058 11.3316C-0.0683528 11.0204 -0.0683528 10.5157 0.205058 10.2043L4.00978 5.87365L0.205191 1.54293C-0.0682199 1.23158 -0.0682199 0.72693 0.205191 0.415729C0.478602 0.104225 0.922071 0.104225 1.19559 0.415729L5.49541 5.31012C5.63201 5.46573 5.70028 5.66971 5.70028 5.87365Z"
              fill="#434040"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AvailableSchedulesLanding;
