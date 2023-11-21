"use client";
import Link from "next/link";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ScienceIcon from "@mui/icons-material/Science";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import {
  guidesURL,
  reagentsForm,
  reservationsURL,
  spacesAndEquipmentForm,
} from "@/constants/urls";
import StudentRoute from "@/StudentRoute/StudentRoute";
import Footer from "@/components/Footer/Footer";
import { getStudentFooterLinks } from "@/utils/footerUtils/hooks/useStudentFooterLinks";

const StudentPanelView = ({ name, email, footerLinks }) => {
  const username = email.split("@")[0];
  return (
    <>
      <StudentRoute>
        <div className="mt-12 mx-10 mb-8">
          <p className="font-['B612'] font-bold pt-8 text-3xl">
            Bienvenido Estudiante:{" "}
            <span className=" font-sans font-normal ">{name} </span>
          </p>

          <p className="font-['B612'] font-bold pt-4 text-xl">Menú principal</p>

          <div className="flex flex-row flex-wrap  justify-start lg:justify-end gap-3 pr-12 py-5">
            <Link
              href={spacesAndEquipmentForm}
              target="_blank"
            >
              <button className="bg-[#283C7C] font-['B612'] text-white p-3 rounded-lg font-bold  transition-transform hover:scale-105 cursor-pointer whitespace-nowrap">
                Reservar un Espacio o Equipo
              </button>
            </Link>
            <Link
              href={reagentsForm}
              target="_blank"
            >
              <button className="bg-[#283C7C] font-['B612'] text-white p-3 rounded-lg font-bold  transition-transform hover:scale-105 cursor-pointer whitespace-nowrap">
                Reservar un Reactivo
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-[#283C7C] p-5 mt-4 mb-8 rounded-lg lg:mr-12 pb-8">
            <Link href={guidesURL}>
              <div
                className="bg-white px-4 py-20 md:px-5 md:py-10 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer"
                style={{ height: "15vh" }}
              >
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Manuales de Laboratorio
                </p>
                <MenuBookIcon style={{ width: "40px", height: "40px" }} />
              </div>
            </Link>

            <Link
              href={{
                pathname: "/student-reagent-request",
                query: { username },
              }}
            >
              <div
                className="bg-white p-5 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer"
                style={{ height: "15vh" }}
              >
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Ver mis reservas de Reactivos
                </p>
                <ScienceIcon style={{ width: "40px", height: "40px" }} />
              </div>
            </Link>

            <Link href={{ pathname: reservationsURL, query: { username } }}>
              <div
                className="bg-white px-4 py-20 md:px-5 md:py-10 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer"
                style={{ height: "15vh" }}
              >
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Ver mis reservas de Espacios/Equipos
                </p>
                <MeetingRoomIcon style={{ width: "40px", height: "40px" }} />
              </div>
            </Link>

            <Link href="">
              <div
                className="bg-white px-4 py-20 md:px-5 md:py-10 rounded-lg mt-3 ml-8 lg:mr-12 gap-2 hidden flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:bg-gray-100 cursor-pointer"
                style={{ height: "15vh" }}
              >
                <p className="font-['B612'] font-bold pt-1 text-xl">
                  Ver mis reservas de Equipos
                </p>
                <HomeRepairServiceIcon
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </Link>
          </div>
        </div>
        <Footer
          links={footerLinks}
          footerColor="blue"
        />
      </StudentRoute>
    </>
  );
};

export default StudentPanelView;
