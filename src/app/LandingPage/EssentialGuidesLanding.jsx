import React from "react";
import LinkToPage from "../LinkToPage";

const EssentialGuidesLanding = () => {
  return (
    <div className="w-full flex flex-col lg:justify-center lg:flex-row mt-10 mb-10">
      <p className="text-stratos text-3xl sm:text-5xl font-b612 font-bold">
        Guías Esenciales del Laboratorio
      </p>
      <div className="flex flex-col justify-center w-full lg:w-auto">
        <div className="self-end mr-8 -mt-6 sm:mt-2">
          <LinkToPage text={"Ver horarios"} />
        </div>
      </div>
    </div>
  );
};

export default EssentialGuidesLanding;
