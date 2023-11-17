"use client";

import Link from "next/link";
import PrivateRoute from "@/privateRoute/privateRoute.jsx";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ScienceIcon from '@mui/icons-material/Science';
import ExtensionIcon from '@mui/icons-material/Extension';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ConstructionIcon from '@mui/icons-material/Construction';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const ProfesorPanelView = ({ name }) => {
  return (
    <>
      <PrivateRoute>
        <div className="mt-12 mx-10">
          <p className="font-['B612'] font-bold pt-8 text-3xl">
            Bienvenido Profesor:
          </p>
          <p className="mt-3 text-2xl">{name}</p>

          <p className="font-['B612'] font-bold pt-4 text-xl">Menú principal</p>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-manz-200 p-5 mt-4 mb-8 rounded-lg lg:mr-12">

          <Link href="/manageClasses">
          <div className="bg-white p-5 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Horario de Clases
                </p>
                <QueryBuilderIcon style={{width: '40px', height: '40px' }} />
              </div>
            </Link>

            <Link href="/reagentInventary">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Inventario de Reactivos
                </p>
                <ScienceIcon style={{width: '40px', height: '40px' }} />
              </div>
            </Link>

            <Link href="/materialInventary">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12  gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Inventario de Materiales
                </p>
                <ExtensionIcon style={{width: '40px', height: '40px' }} />

              </div>
            </Link>

            <Link href="/equipmentInventary">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center  text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Inventario de Equipos
                </p>
                <HomeRepairServiceIcon style={{width: '40px', height: '40px' }} />
              </div>
            </Link>

            <Link href="">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12 gap-2  flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Solicitudes de Reactivos
                </p>
                <ListAltIcon style={{width: '40px', height: '40px' }} />
              </div>
            </Link>

            <Link href="">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Equipos en calidad de prestamo.
                </p>
                <ConstructionIcon style={{width: '40px', height: '40px' }} />

              </div>
            </Link>

            <Link href="">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center  text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Solicitudes equipos/espacio
                </p>
                <MeetingRoomIcon style={{width: '40px', height: '40px' }} />

              </div>
            </Link>


            <Link href="/require-purchase">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Compras Requeridas
                </p>
                <ShoppingBasketIcon style={{width: '40px', height: '40px' }} />

              </div>
            </Link>

            <Link href="research-investigations">
            <div className="bg-white p-5 rounded-lg mt-4 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Trabajos de Investigación en el Laboratorio
                </p>
                <AssignmentIcon style={{width: '40px', height: '40px' }} />
              </div>
            </Link>

          </div>
        </div>
      </PrivateRoute>
    </>
  );
};

export default ProfesorPanelView;
