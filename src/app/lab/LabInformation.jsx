import React from "react";
import Laboratorio from "../../assets/Laboratorio.PNG";
import Map from "../../assets/Mapa.png";
import ClockCheckIcon from "mdi-react/ClockCheckIcon";
import MapMarkerIcon from "mdi-react/MapMarkerIcon";
import MapSearchIcon from "mdi-react/MapSearchIcon";

const LabInformation = () => {
  return (
    <div className="w-full flex flex-col mt-20 mb-10">
      <p className="pb-10 text-stratos px-4 text-3xl sm:text-5xl self-center tracking-tighter font-b612 font-bold">
        Ubicación del Laboratorio
      </p>
      <img
        src={Laboratorio.src}
        alt="Laboratorio"
        className="drop-shadow-lg self-center lg-px-36 rounded-lg h-[132px] w-11/12 md:w-3/4 sm:h-[150px] sm:w-[max] lg:h-[300px] xl:h-[400px]"
      />
      <div className="pt-10 w-full flex items-center gap-3 sm:justify-center lg:mt-4">
        <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-[78px] w-[80px] sm:h-[98px] sm:w-[100px] lg:h-[130px] lg:w-[130px] animate-fade-left mx-4 mt-10">
          <MapMarkerIcon className="w-10 h-10 sm:w-14 sm:h-14 xl:w-20 xl:h-20" />
        </div>
        <p className="list-disc w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center ml-4 mt-10 animate-fade-right">
          Campus Universitario Unimet, Edificio Corimón, Planta Baja
        </p>
      </div>
      <div className="w-full flex gap-3 sm:justify-center lg:mt-4">
        <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-[78px] w-[80px] sm:h-[98px] sm:w-[100px] lg:h-[130px] lg:w-[130px] animate-fade-left mx-4 mt-10">
          <ClockCheckIcon className="w-10 h-10 sm:w-14 sm:h-14 xl:w-20 xl:h-20" />
        </div>
        <div className="w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center ml-4 mt-12 animate-fade-right">
          <p className="list-disc">
            El Laboratorio esta disponible para toda la Comunidad Unimetana de{" "}
            <b>lunes a viernes</b>
          </p>
          <li className="ml-10 mt-4">7:00am a 5:30pm (previa reserva)</li>
        </div>
      </div>
      <div className="w-full flex gap-3 sm:justify-center lg:mt-4">
        <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-[78px] w-[80px] sm:h-[98px] sm:w-[100px] lg:h-[130px] lg:w-[130px] animate-fade-left mx-4 mt-10">
          <MapSearchIcon className="w-10 h-10 sm:w-14 sm:h-14 xl:w-20 xl:h-20" />
        </div>
        <div className="w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center ml-4 mt-10 animate-fade-right">
          <img
            src={Map.src}
            alt="Mapa"
            className="rounded-lg w-[320px] sm:w-[550px] lg:h-[500px] lg:w-[1000px] animate-fade-left mr-4 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LabInformation;
