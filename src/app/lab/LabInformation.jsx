import React from "react";
import Laboratorio from "../../assets/Laboratorio.PNG";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlanoAccesoUnimet from "../../assets/planoUnimet.png";
import MapSearchIcon from "mdi-react/MapSearchIcon";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";

const LabInformation = () => {
  return (
    <>
      <p className=" pl-10 mt-10 mb-4 text-stratos px-4 text-3xl flex justify-center sm:text-3xl self-left tracking-tighter font-b612 font-bold" id="LabInformation" >
          Ubicación del Laboratorio
      </p>
      
      <div className="flex flex-col items-le w-11/12 mb-16" >
        <img
          src={Laboratorio.src}
          alt="Laboratorio"
          className="drop-shadow-lg lg-px-36 rounded-lg h-[150px] w-[auto] mr-10 lg:h-[350px] lg:mx-40 sm:ml-20"
        />

        <div className="flex flex-col sm:ml-20 lg:flex-row lg:justify-between lg:gap-4">
        
            <div className="pt-10 flex justify-left  align-center gap-2  ">
              <div className="flex justify-center items-center bg-[#FFB635] rounded-full h-14 w-14 animate-fade-left mx-4">
                <LocationOnIcon style={{ height: "35px", width: "35px" }} />
              </div>
              <p className="mt-3">
                Edificio Corimón, Planta Baja, UNIMET
              </p>
            </div>

            <div className="pt-3 flex justify-left  items-left gap-2 lg:mt-4">
              <div className="flex justify-center items-center bg-[#FFB635] rounded-full h-14 w-14 animate-fade-left mx-4">
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
          
            <div className="lg:block sm: hidden" style={{ position: 'relative', width: '50%', height: '200px'  }}>
              <div className=" mt-6 flex justify-center items-center bg-[#FFB635] rounded-full h-14 w-14 animate-fade-left mx-4 z-30">
                  <MapSearchIcon style={{ height: "35px", width: "35px" }} />
              </div>   
                <Image 
                  src={PlanoAccesoUnimet}
                  layout="fill"
                  objectFit="contain"
                  alt="Descripción de la imagen"
                  style={{marginTop: "32px"}}
                />
            </div>
          </div>
      </div>
    </>
  );
};

export default LabInformation;
