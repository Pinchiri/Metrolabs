import React from "react";
import Laboratorio from "../../assets/Laboratorio.PNG";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapSearchIcon from "mdi-react/MapSearchIcon";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const LabInformation = () => {
  return (
    <>
    <p className=" pl-10 mt-10 mb-4 text-stratos px-4 text-3xl sm:text-3xl self-left tracking-tighter font-b612 font-bold" id="LabInformation" >
        Ubicación del Laboratorio
    </p>
    <div className="w-full flex flex-col mt-2 mb-10 " >
      <img
        src={Laboratorio.src}
        alt="Laboratorio"
        className="drop-shadow-lg pl-10 self-left lg-px-36 rounded-lg h-[150px] w-[auto] mr-10 lg:h-[350px] lg:mx-40"
      />
      
      <div className="lg:flex lg:flex-row lg:justify-around ">
        <div className="pl-6 pt-5 w-full flex justify-left align-center  gap-2  ">
          <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-14 w-14 animate-fade-left mx-4">
            <LocationOnIcon style={{ height: "35px", width: "35px" }} />
          </div>
          <p className="mt-3">
            Edificio Corimón, Planta Baja, UNIMET
          </p>
        </div>

        <div className="pl-6 pt-3 w-full flex items-left gap-2 lg:mt-4">
          <div className="flex justify-center items-center bg-[#F3F386] rounded-full h-14 w-14 animate-fade-left mx-4 ">
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
        
        
        <div className="w-full flex gap-2 sm:justify-left pl-6">
            <div className="w-1/2 ml-5 mt-5 text-oxford text-sm sm:text-2xl lg:text-3xl lg:self-center lg:justify-self-center sm:w-[150px] animate-fade-right">
                <iframe 
                    className="w-[250px] h-[150px] lg:w-[300px] lg:h-[200px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.18862038205265!2d-66.78479482303842!3d10.499252747137666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a576d4b871293%3A0xa9c88b9110c38b31!2sF6X8%2BM6R%2C%20caminos%20internos%20Universidad%20Metropolitana%2C%20Caracas%201073%2C%20Miranda!5e0!3m2!1ses!2sve!4v1698094278576!5m2!1ses!2sve"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>


      </div> 
    </div>
  </>
  );
};

export default LabInformation;
