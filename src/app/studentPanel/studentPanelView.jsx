"use client";
import Link from "next/link";
import PrivateRoute from "@/privateRoute/privateRoute.jsx";

const StudentPanelView = ({ name }) => {
  return (
    <>
      <PrivateRoute>
        <div className="mt-12 mx-10">
          <p className="font-['B612'] font-bold pt-8 text-3xl">
            Bienvenido Alumno:
          </p>
          <p className="mt-3 text-2xl">{name}</p>

          <div className="bg-manz-200 p-5 mt-8 rounded-lg lg:mr-12">
            <Link href="/reagentInventary">
              <div className="bg-white p-5 rounded-lg mt-3 lg:mr-12 flex justify-center">
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Ver Manuales de Laboratorio
                </p>
              </div>
            </Link>
          </div>
        </div>
      </PrivateRoute>
    </>
  );
};

export default StudentPanelView;
