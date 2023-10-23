import React from "react";
import Guiderule from "../../assets/Normativas.PNG";

const LabGuideRules = () => {
  return (
    <div className="w-full flex flex-col mt-10 mb-10">
      <p className="pb-10 text-stratos px-4 text-3xl sm:text-5xl self-center tracking-tighter font-b612 font-bold">
        Normativas del Laboratorio
      </p>
      <img
        src={Guiderule.src}
        alt="Normativas"
        className="drop-shadow-lg self-center lg-px-36 rounded-lg h-[132px] w-11/12 md:w-3/4 sm:h-[150px] sm:w-[max] lg:h-[300px] xl:h-[400px]"
      />
      <p className="w-[max] pl-16 pr-10 text-oxford text-sm sm:text-2xl lg:text-3xl pl-4 mt-10 animate-fade-right">
        <ul className="list-disc">
          <li className="pb-4">
            Antes de ingresar, asegúrate de llevar puesto una bata adecuada y
            gafas de seguridad para proteger tus ojos y cuerpo.
          </li>
          <li className="pb-4">
            Por tu seguridad y la de otros, está estrictamente prohibido comer,
            beber o usar dispositivos móviles en el área del laboratorio.
          </li>
          <li className="pb-4">
            Al manipular químicos, hazlo con sumo cuidado y siempre sigue las
            instrucciones en las etiquetas y las proporcionadas por el
            supervisor.
          </li>
          <li className="pb-4">
            En caso de un derrame, accidente o cualquier anomalía, reporta de
            inmediato al encargado o supervisor del laboratorio.
          </li>
          <li className="pb-4">
            {" "}
            Evita trabajar en solitario en el laboratorio; siempre es
            recomendable tener al menos un compañero cerca para responder ante
            emergencias.
          </li>
          <li className="pb-4">
            Al deshacerte de residuos o sustancias, únicamente utiliza los
            contenedores designados y sigue las indicaciones para su correcta
            disposición.
          </li>
          <li className="pb-4">
            {" "}
            Antes de iniciar cualquier experimento, lee y comprende
            completamente el protocolo o las instrucciones proporcionadas.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default LabGuideRules;
