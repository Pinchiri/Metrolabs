import React from "react";
import scientistAsset from "../../assets/scientist-asset.png";

const QuoteInfoLanding = () => {
  return (
    <div className="w-full flex flex-col mt-10 lg:mt-20 mb-10">
      <p className="text-stratos px-4 xl:px-0 text-3xl sm:text-5xl lg:w-1/2 xl:self-start xl:ml-10 tracking-tighter font-b612 font-bold">
        Te invitamos a seguir creciendo en nuestros laboratorios
      </p>
      <div className="flex gap-4 lg:justify-center lg:mt-6">
        <img
          src={scientistAsset.src}
          alt="Scientist Asset"
          className="h-1/2 sm:h-1/3 lg:h-[350px] w-1/2 lg:w-[170px]  sm:w-1/3 mt-10 sm:ml-10 relative z-10 animate-fade-right"
        />
        <div className="flex flex-col sm:px-10 lg:w-1/2">
          <p className="mt-48 text-black text-xl sm:text-3xl tracking-tighter font-b612 font-bold animate-fade-left">
            "No hay que temer a nada en la vida, solo hay que comprenderlo."
          </p>
          <p className="self-end mr-6 sm:mr-10 mt-4 text-black text-xl sm:text-3xl tracking-tighter font-b612 animate-fade-left">
            Marie Curie
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteInfoLanding;
