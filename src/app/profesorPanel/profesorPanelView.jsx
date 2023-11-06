"use client";

import Link from "next/link";
import PrivateRoute from "@/privateRoute/privateRoute.jsx";

const ProfesorPanelView = ({ name }) => {
  return (
    <>
      <PrivateRoute>
        <div className="mt-12 mx-10">
          <p className="font-['B612'] font-bold pt-8 text-3xl">
            Bienvenido Profesor:
          </p>
          <p className="mt-3 text-2xl">{name}</p>

          <p className="font-['B612'] font-bold pt-8 text-xl">Menú principal</p>

          <div className="bg-manz-200 p-5 mt-4 rounded-lg lg:mr-12">
            <Link href="/reagentInventary">
              <div className="bg-white p-5 rounded-lg mt-3 lg:mr-12 flex justify-center">
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Inventario de Reactivos
                </p>
              </div>
            </Link>

            <Link href="/materialInventary">
              <div className="bg-white p-5 rounded-lg mt-8 lg:mr-12 flex justify-center">
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Inventario de Materiales
                </p>
              </div>
            </Link>

            <Link href="/equipmentInventary">
              <div className="bg-white p-5 rounded-lg mt-8 lg:mr-12 flex justify-center">
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Inventario de Equipos
                </p>
              </div>
            </Link>

            <Link href="/manageClasses">
              <div className="bg-white p-5 rounded-lg mt-8 lg:mr-12 flex justify-center">
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Horario de Clases
                </p>
              </div>
            </Link>
          </div>
        </div>
      </PrivateRoute>
    </>
  );
};

export default ProfesorPanelView;
