import React from "react";
import Laboratorio from "../../assets/Laboratorio.png";
import CoordinateSymbol from "../../assets/CoordinateSymbol.png"
import ClockSymbol from "../../assets/ClockSymbol.png"
import MapSymbol from "../../assets/MapSymbol.png"
import Map from "../../assets/Mapa.png"

const LabInformation = () => {
  return (
    <div className="w-full flex flex-col mt-10 mb-10">
      <p className="pb-10 text-stratos px-4 text-3xl sm:text-5xl self-center tracking-tighter font-b612 font-bold">
        Ubicación del Laboratorio
      </p>
      <img
          src={Laboratorio.src}
          alt="Laboratorio"
          className="shadow-xl lg-px-36 rounded-3xl h-[132px] w-[max] sm:h-[150px] sm:w-[max] lg:h-[300px] lg:w-[max]"
        />
        <div className="pt-10 w-full flex gap-3 lg:justify-center lg:mt-4">
        <img
          src={CoordinateSymbol.src}
          alt="Simbolo de localización"
          className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[130px] lg:w-[170px] relative z-10 animate-fade-left mr-4 mt-4"
        />
        <p className="w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center pl-4 mt-10 animate-fade-right">
        <ul className="list-disc">
          <li>Edificio Corimón, Campus Universitario Unimet, planta baja.</li>
        </ul> 
        </p> 
      </div>
      <div className="w-full flex gap-3 lg:justify-center lg:mt-4">
        <img
          src={ClockSymbol.src}
          alt="Simbolo de reloj"
          className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[130px] lg:w-[170px] relative z-10 animate-fade-left mr-4 mt-4"
        />
        <p className="w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center pl-4 mt-10 animate-fade-right">
        <ul>
          <li className="list-disc">El laboratorio esta disponible para toda la Comunidad Unimetana.</li>
          <li className="font-bold">Lunes a viernes de 7:00am a 5:30pm (previa reserva)</li>
        </ul> 
        </p> 
      </div>
      <div className="w-full flex gap-3 lg:justify-center lg:mt-4">
        <img
          src={MapSymbol.src}
          alt="Simbolo de mapa"
          className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[130px] lg:w-[170px] relative z-10 animate-fade-left mr-4 mt-4"
        />
        <p className="w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center pl-4 mt-10 animate-fade-right">
        <ul>
          <li><img
          src={Map.src}
          alt="Mapa"
          className="relative h-[250px] w-[320px] sm:h-[250px] sm:w-[550px] lg:h-[500px] lg:w-[1000px] relative z-10 animate-fade-left mr-4 mt-4"
        /></li>
        </ul> 
        </p> 
      </div>
    </div>
     
  );
};

export default LabInformation;
