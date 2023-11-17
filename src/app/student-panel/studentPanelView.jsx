"use client";
import Link from "next/link";
import PrivateRoute from "@/privateRoute/privateRoute.jsx";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ScienceIcon from '@mui/icons-material/Science';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Footer from "@/components/studentFooter/footer";


const StudentPanelView = ({ name, email }) => {
  
  const username = email.split('@')[0];
  return (
    <>
      <PrivateRoute>
      <div className="mt-12 mx-10 mb-8">

           <p className="font-['B612'] font-bold pt-8 text-3xl">
            Bienvenido Estudiante: <span className=" font-sans font-normal ">{name} </span>
          </p>


          <p className="font-['B612'] font-bold pt-4 text-xl">Menú principal</p>

          <div className="flex flex-row flex-wrap  justify-start lg:justify-end gap-3 pr-12 py-5">
            <button className="bg-[#283C7C] font-['B612'] text-white p-3 rounded-lg font-bold  transition-transform hover:scale-105 cursor-pointer ">
                Crear reserva Espacio
            </button>
            <button className="bg-[#283C7C] font-['B612'] text-white p-3 rounded-lg font-bold transition-transform hover:scale-105 cursor-pointer ">
                Crear reserva Reactivo
            </button>
            <button className="bg-[#283C7C] font-['B612'] text-white p-3 rounded-lg font-bold transition-transform hover:scale-105 cursor-pointer ">
                Crear reserva Equipo
            </button>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-[#283C7C] p-5 mt-4 mb-8 rounded-lg lg:mr-12 ">

          <Link href="/guides">
          <div className="bg-white p-5 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Manuales de Laboratorio
                </p>
                <MenuBookIcon style={{width: '40px', height: '40px' }} />
              </div>
          </Link>

          <Link href={{ pathname: '/student-reagent-request', query: { username } }}>
          <div className="bg-white p-5 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Ver mis reservas de Reactivos
                </p>
                <ScienceIcon style={{width: '40px', height: '40px' }} />
              </div>
          </Link>

          <Link href="">
          <div className="bg-white p-5 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Ver mis reservas de Equipos
                </p>
                <HomeRepairServiceIcon style={{width: '40px', height: '40px' }} />
              </div>
          </Link>

          <Link href="">
          <div className="bg-white p-5 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer" style={{ height: '15vh' }}>
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Ver mis reservas de Espacios
                </p>
                <MeetingRoomIcon style={{width: '40px', height: '40px' }} />
              </div>
          </Link>
          </div>
        </div>
        <Footer />
      </PrivateRoute>
    </>
  );
};

export default StudentPanelView;
