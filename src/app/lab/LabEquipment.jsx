import React from "react";
import Equipment from "../../assets/Equipos.PNG";

const LabEquipment = () => {
  return (
    <div
      className="w-full flex flex-col mt-2 mb-10"
      id="LabEquipment"
    >
      <p className=" pl-10 pb-10 text-stratos flex justify-center px-4 text-3xl sm:text-3xl self-left tracking-tighter font-b612 font-bold">
        Equipamiento Disponible
      </p>
      <img
        src={Equipment.src}
        alt="Equipamiento"
        className="drop-shadow-lg pl-10 self-left lg-px-36 rounded-lg h-[150px] w-[auto] mr-10 lg:h-[350px] lg:mx-40"
      />
      <div className="lg:flex lg:flex-row lg:flex-between">
        <div className="lg:w-1/2">
          <p className="pt-6 pl-10 flex justify-center text-stratos px-4 text-2xl sm:text-2xl xl:self-start xl:ml-10 lg:w-full tracking-tighter font-b612 font-bold lg:pl-4">
            Equipos
          </p>
          <div className="w-[max] pl-16 pr-10 animate-fade-right">
            <ul className="list-disc pt-5 ml-5 lg:ml-10">
              <li className="pb-2">Refractómetro</li>
              <li className="pb-2">Equipo de Destilación Continua.</li>
              <li className="pb-2">Equipo de Destilación por Carga.</li>
              <li className="pb-2">Equipo de Fluidización.</li>
              <li className="pb-2">Equipo de Secado por Convección.</li>
              <li className="pb-2">Equipo de Absorción.</li>
              <li className="pb-2">
                Equipo de Filtración a Presión Constante.
              </li>
              <li className="pb-2">Equipo de Extracción Líq-Líq.</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/2">
          <p className="pt-5 pl-10 flex justify-center text-stratos px-4 text-2xl sm:text-2xl xl:self-start xl:ml-10 lg:w-full tracking-tighter font-b612 font-bold">
            Reactivos
          </p>
          <div className="w-[max] pl-16 pr-10 animate-fade-right">
            <ul className="list-disc pt-5 ml-5 lg:ml-10">
              <li className="pb-2">
                Tierra Diatomea (SiO2): 1 tambor, 150 litros.
              </li>
              <li className="pb-2">
                Alcohol Isopropílico (C3H7OH): 1 tambor, 10-20 galones.
              </li>
              <li className="pb-2">
                Alcohol Isopropílico (C3H7OH): 1 tambor, 15-50 galones.
              </li>
              <li className="pb-2">Alcohol Isopropílico (C3H7OH): 1 galón.</li>
              <li className="pb-2">
                N-Butanol (C4H10O): 2 tambores, 30-50 galones c/u.
              </li>
              <li className="pb-2">Hexano (C6H14): 1 tambor, 40-50 galones.</li>
              <li className="pb-2">Hexano (C6H14): 1 tambor, 20-40 galones.</li>
              <li className="pb-2">
                Parafina Refinada (CnH2n+2): 16 sacos, 24 kilogramos en total.
              </li>
              <li className="pb-2">
                Sal Industrial (NaCl): 1 saco, 20 kilogramos.
              </li>
              <li className="pb-2">
                Aceite ISO 46: 1 tambor turbolub, 10-20 galones.
              </li>
              <li className="pb-2">Venotherm 32: 1 tambor, 10-30 galones.</li>
              <li className="pb-2">
                Carbonato de Calcio (CaCO3): 4 envaces de 5 kilogramos, 20
                kilogramos total.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabEquipment;
