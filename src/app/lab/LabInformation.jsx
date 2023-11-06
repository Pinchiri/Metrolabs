import React from "react";
import Laboratorio from "../../assets/Laboratorio.PNG";
import Corimon from "../../assets/Captura5.PNG";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapSearchIcon from "mdi-react/MapSearchIcon";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const LabInformation = () => {
  return (
    <>
      <p
        className=" pl-10 mt-10 mb-4 text-stratos px-4 text-3xl flex justify-center sm:text-3xl self-left tracking-tighter font-b612 font-bold"
        id="LabInformation"
      >
        Ubicación del Laboratorio
      </p>
      <div className="mt-2 mb-10 ">
        <img
          src={Laboratorio.src}
          alt="Laboratorio"
          className="drop-shadow-lg pl-10 self-left lg-px-36 rounded-lg h-[150px] w-[auto] mr-10 lg:h-[350px] lg:mx-40"
        />

        <div className="lg:flex lg:flex-row lg:justify-around ">
          <div className="pl-6 pt-10 w-full flex justify-left pl-8 align-center  gap-2  ">
            <div className="flex justify-center items-center bg-[#FFB635] rounded-full h-14 w-14 animate-fade-left mx-4">
              <LocationOnIcon style={{ height: "35px", width: "35px" }} />
            </div>
            <p className="mt-3">Edificio Corimón, Planta Baja, UNIMET</p>
          </div>
        </div>

        <div className="pt-3 w-full flex justify-left pl-8 items-left gap-2 lg:mt-4">
          <div className="flex justify-center items-center bg-[#FFB635] rounded-full h-14 w-14 animate-fade-left mx-4 ">
            <WatchLaterIcon style={{ height: "35px", width: "35px" }} />
          </div>
          <div>
            <p>Abierto de lunes a viernes.</p>
            <p>7:00am - 5:30pm (previa reserva)</p>
          </div>
        </div>
      </div>
      <div className="w-[auto] sm:justify-left flex justify-center rounded-lg">
        <div className="w-[300px] h-[175px] lg:w-[600px] lg:h-[350px] sm:w-[400px] sm:h-[200px] ml-5 mt-5 text-oxford flex justify-center text-sm sm:text-2xl lg:text-3xl animate-fade-right">
          <iframe
            className="w-[300px] h-[175px] lg:w-[600px] lg:h-[350px] sm:w-[400px] sm:h-[200px]"
            src="https://lenguasycontemporaneidad2.files.wordpress.com/2012/12/plano-acceso-unimet2.png"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="w-[auto] sm:justify-left flex justify-center rounded-lg">
        <div className="w-[300px] h-[175px] lg:w-[600px] lg:h-[350px] sm:w-[400px] sm:h-[200px] ml-5 mt-5 text-oxford text-sm sm:text-2xl lg:text-3xl animate-fade-right">
          <img
            src={Corimon.src}
            alt="Corimon"
          />
        </div>
      </div>
    </>
  );
};

export default LabInformation;
