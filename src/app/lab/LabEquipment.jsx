"use client";
import React, { useState, useEffect } from 'react';
import Equipment from "../../assets/Equipos.PNG";
import { fetchInformation } from "./FirebaseFetch";
import Spinner from "@/components/Spinner/spinner";

const LabEquipment = () => {
  const [equipmentsInformation, setEquipmentsInformation] = useState([]);
  const [reagentInformation, setReagentsInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEquipmentsAndReagents = async () => {
      setIsLoading(true); // Iniciar la carga
      const equipmentsData = await fetchInformation("equipments");
      setEquipmentsInformation(equipmentsData);
      const reagentsData = await fetchInformation("reagents");
      setReagentsInformation(reagentsData);
      setIsLoading(false); // Finalizar la carga
    };
    loadEquipmentsAndReagents();
  }, []);

  if (isLoading) {
    return <Spinner />; 
  }

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
              {equipmentsInformation.map((equipment, index) => (
                <li key={index} className="pb-2">{equipment.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/2">
          <p className="pt-5 pl-10 flex justify-center text-stratos px-4 text-2xl sm:text-2xl xl:self-start xl:ml-10 lg:w-full tracking-tighter font-b612 font-bold">
            Reactivos
          </p>
          <div className="w-[max] pl-16 pr-10 animate-fade-right">
          <ul className="list-disc pt-5 ml-5 lg:ml-10">
              {reagentInformation.map((reagent, index) => (
                <li key={index} className="pb-2">{reagent.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabEquipment;
