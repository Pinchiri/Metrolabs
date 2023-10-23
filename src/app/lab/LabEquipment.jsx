import React from "react";
import Equipment from "../../assets/Equipos.PNG";

const LabEquipment = () => {
  return (
    <div className="w-full flex flex-col mt-14 mb-10">
      <p className="pb-10 text-stratos px-4 text-3xl sm:text-5xl self-center tracking-tighter font-b612 font-bold">
        Equipamiento Disponible
      </p>
      <img
        src={Equipment.src}
        alt="Equipamiento"
        className="shadow-xl lg-px-36 rounded-3xl h-[132px] w-[max] sm:h-[150px] sm:w-[max] lg:h-[300px] lg:w-[max]"
      />
      <p className="pt-10 text-stratos px-4 text-3xl sm:text-5xl xl:self-start xl:ml-10 lg:w-1/2 tracking-tighter font-b612 font-bold">
        Equipos
      </p>
      <p className="pl-10 w-[max] text-oxford text-sm sm:text-2xl lg:text-3xl mt-10 animate-fade-right">
        <ul className="list-disc">
          <li className="pb-4">Centrífuga: Para separar mezclas.</li>
          <li className="pb-4">
            Columnas de cromatografía: Usada en la separación de mezclas basadas
            en afinidades.
          </li>
          <li className="pb-4">
            Destilador: Para separar mezclas liquidas según puntos de
            ebullición.
          </li>
        </ul>
        <ol className="list-decimal">
          <li className="pb-4">
            Horno de mufla: Para separar componentes mediante calcinación.
          </li>
          <li className="pb-4">
            Camara de electroforesís: Usada para separar moléculas según el
            tamaño y carga eléctrica.
          </li>
        </ol>
      </p>
      <p className="pt-10 text-stratos px-4 text-3xl sm:text-5xl xl:self-start xl:ml-10 lg:w-1/2 tracking-tighter font-b612 font-bold">
        Reactivos
      </p>
      <p className="pl-10 w-[max] text-oxford text-sm sm:text-2xl lg:text-3xl mt-10 animate-fade-right">
        <ul className="list-disc">
          <li className="pb-4">
            Ácido sulfúrico (H₂SO₄): Utilizado en numerosas reacciones y como
            catalizador en ciertos procesos.
          </li>
          <li className="pb-4">
            Ácido clorhídrico (HCl): Ampliamente usado para ajustar el pH y como
            reactivo en procesos de separación.
          </li>
          <li className="pb-4">
            Ácido nítrico (HNO₃): Utilizado en la digestión de muestras y en
            ciertos procedimientos de separación.{" "}
          </li>
          <li className="pb-4">
            Etanol (C₂H₅OH): Un solvente orgánico común en extracciones y otros
            procesos.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default LabEquipment;
