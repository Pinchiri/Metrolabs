import React from "react";
import Laboratorio from "../../assets/Laboratorio.PNG";
import Map from "../../assets/Mapa.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapSearchIcon from "mdi-react/MapSearchIcon";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const LabInformation = () => {
  return (
    <div className="w-full flex flex-col mt-2 mb-10" id="LabInformation">
      <p className=" pl-10 pb-10 text-stratos px-4 text-3xl sm:text-3xl self-left tracking-tighter font-b612 font-bold">
        Ubicación del Laboratorio
      </p>
      <img
        src={Laboratorio.src}
        alt="Laboratorio"
        className="drop-shadow-lg pl-10 self-left lg-px-36 rounded-lg h-[132px] w-11/12 md:w-3/4 sm:h-[150px] sm:w-[max] lg:h-[300px] xl:h-[400px]"
      />
      <div className="pl-6 pt-5 w-full flex justify-left align-center  gap-2  ">
        <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-14 w-14 animate-fade-left mx-4">
           <LocationOnIcon style={{ height: "35px", width: "35px" }} />
        </div>
        <p className="mt-3">
          Edificio Corimón, Planta Baja, UNIMET
        </p>
      </div>

      <div className="pl-6 pt-3 w-full flex items-left gap-2 ">
        <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-14 w-14 animate-fade-left mx-4">
           <WatchLaterIcon style={{ height: "35px", width: "35px" }} />
        </div>
        <div>
          <p>
            Abierto de lunes a viernes.
          </p>
          <p>
            7:00am - 5:30pm  (previa reserva)
          </p>
        </div>
      </div>
      
      
      <div className="w-full flex gap-2 sm:justify-left pl-6 lg:mt-4">
        <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-14 w-14 animate-fade-left mx-4 mt-10">
          <MapSearchIcon style={{ height: "35px", width: "35px" }} />
        </div>
        <div className="w-1/2 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center  animate-fade-right">
          <img
            src={Map.src}
            alt="Mapa"
            className="rounded-lg w-[320px] sm:w-[550px] lg:h-[200px] lg:w-[400px] animate-fade-left mr-4 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LabInformation;
