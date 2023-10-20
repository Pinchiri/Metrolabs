import React from "react";
import scientistAsset from "../../assets/scientist-asset.png";

const QuoteInfoLanding = () => {
  return (
    <div className="w-full flex flex-col mt-10 mb-10">
      <p className="text-stratos text-3xl font-b612 font-bold">
        Te invitamos a seguir creciendo en nuestros laboratorios
      </p>
      <div className="flex">
        <img
          src={scientistAsset.src}
          alt="Scientist Asset"
          className="h-1/2 w-1/2 mt-10 relative z-10 animate-fade-right"
        />
        <div className="flex flex-col">
          <p className="mt-48 text-black text-xl tracking-tighter font-b612 font-bold animate-fade-left">
            "No hay que temer a nada en la vida, solo hay que comprenderlo."
          </p>
          <p className="self-end mr-6 mt-4 text-black text-xl tracking-tighter font-b612 animate-fade-left">
            Marie Curie
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteInfoLanding;
