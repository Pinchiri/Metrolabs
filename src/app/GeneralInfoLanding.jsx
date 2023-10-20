import React from "react";
import guyAsset from "../assets/guy-asset.png";
import LinkToPage from "./LinkToPage";

const GeneralInfoLanding = () => {
  return (
    <div className="w-full flex flex-col mt-10 mb-10">
      <p className="text-stratos text-3xl font-b612 font-bold">
        Información general y normativas del Laboratorio
      </p>
      <div className="w-full flex gap-3">
        <p className="w-1/2 text-oxford  text-sm pl-4 mt-10 animate-fade-right">
          El Laboratorio sigue rigurosos estándares internacionales para
          garantizar operaciones seguras y eficientes. Es imperativo que todos
          los usuarios conozcan y adhieran a nuestras normativas y
          procedimientos establecidos para garantizar la integridad de cada
          experimento.
        </p>
        <img
          src={guyAsset.src}
          alt="Guy Asset"
          className="h-1/2 w-1/2 relative z-10 animate-fade-left mr-4 mt-4"
        />
      </div>
      <div className="self-end mt-2 mr-6">
        <LinkToPage text={"Conocer más"} />
      </div>
    </div>
  );
};

export default GeneralInfoLanding;
