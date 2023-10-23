import React from "react";
import Equipment from "../../assets/Equipos.PNG";

const LabEquipment = () => {
  return (
    <div className="w-full flex flex-col mt-2 mb-10" id="LabEquipment">
      <p className=" pl-10 pb-10 text-stratos px-4 text-3xl sm:text-3xl self-left tracking-tighter font-b612 font-bold">
        Equipamiento Disponible
      </p>
      <img
        src={Equipment.src}
        alt="Equipamiento"
        className="drop-shadow-lg  pl-10 lg-px-36 rounded-lg h-[132px] w-11/12 md:w-3/4 sm:h-[150px] sm:w-[max] lg:h-[300px] xl:h-[400px]"
      />
      <p className="pt-6 pl-10 text-stratos px-4 text-2xl sm:text-2xl xl:self-start xl:ml-10 lg:w-1/2 tracking-tighter font-b612 font-bold">
        Equipos
      </p>
      <div className="w-[max] pl-16 pr-10 animate-fade-right">
        <ul className="list-disc pt-5 ml-5 lg:ml-10">
          <li className="pb-2">
            Centrífuga: Para separar mezclas.
          </li>
          <li className="pb-2">
            Columnas de cromatografía: Usada en la separación de mezclas basadas
            en afinidades.
          </li>
          <li className="pb-2">
            Destilador: Para separar mezclas liquidas según puntos de
            ebullición.
          </li>
          <li className="pb-2">
            Horno de mufla: Para separar componentes mediante calcinación.
          </li>
          <li className="pb-2">
            Camara de electroforesís: Usada para separar moléculas según el
            tamaño y carga eléctrica.
          </li>
        </ul>
      </div>
      <p className="pt-3 pl-10 text-stratos px-4 text-2xl sm:text-2xl xl:self-start xl:ml-10 lg:w-1/2 tracking-tighter font-b612 font-bold">
        Reactivos
      </p>
      <div className="w-[max] pl-16 pr-10 animate-fade-right">
        <ul className="list-disc pt-5 ml-5 lg:ml-10">
          <li className="pb-2">
            Ácido sulfúrico (H₂SO₄): Utilizado en numerosas reacciones y como
            catalizador en ciertos procesos.
          </li>
          <li className="pb-2">
            Ácido clorhídrico (HCl): Ampliamente usado para ajustar el pH y como
            reactivo en procesos de separación.
          </li>
          <li className="pb-2">
            Ácido nítrico (HNO₃): Utilizado en la digestión de muestras y en
            ciertos procedimientos de separación.{" "}
          </li>
          <li className="pb-2">
            Etanol (C₂H₅OH): Un solvente orgánico común en extracciones y otros
            procesos.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LabEquipment;
