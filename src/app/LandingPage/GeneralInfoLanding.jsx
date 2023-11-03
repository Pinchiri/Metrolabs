import React from "react";
import guyAsset from "../../assets/guy-asset.png";
import LinkToPage from "./LinkToPage";
import { labURL } from "@/constants/urls";

const GeneralInfoLanding = () => {
  return (
    <div className="w-full flex flex-col mt-10 mb-10">
      <p className="text-stratos px-4 text-3xl sm:text-5xl xl:ml-10 lg:w-1/2 tracking-tighter font-b612 font-bold">
        Información general y normativas del Laboratorio
      </p>
      <div className="w-full flex gap-3 lg:justify-center lg:mt-4">
        <p className="w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center pl-4 mt-10 animate-fade-right">
          El Laboratorio sigue rigurosos estándares internacionales para
          garantizar operaciones seguras y eficientes. Es imperativo que todos
          los usuarios conozcan y adhieran a nuestras normativas y
          procedimientos establecidos para garantizar la integridad de cada
          experimento.
        </p>
        <img
          src={guyAsset.src}
          alt="Guy Asset"
          className="h-1/2 sm:h-1/3 lg:h-[350px] w-1/2 sm:w-1/3 lg:w-[200px] relative z-10 animate-fade-left mr-4 mt-4"
        />
      </div>
      <div className="self-end mt-2 mr-6 sm:mr-20 lg:mr-52">
        <LinkToPage
          text={"Conocer más"}
          link={labURL}
        />
      </div>
    </div>
  );
};

export default GeneralInfoLanding;
