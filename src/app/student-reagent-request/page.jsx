"use client";

import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter, useSearchParams } from "next/navigation";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import StudentReagentCard from "@/components/studentReagentCard/studentReagentCard";
import StudentRoute from "@/StudentRoute/StudentRoute";

const SheetComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("username") + "@correo.unimet.edu.ve";
  const username = email.split("@")[0];

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [toasterVisible, setToasterVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Obtener la información que se corresponda con la info del estudiante
  const fetchData = async () => {
    setToasterVisible(false);
    setLoading(true);
    try {
      const response = await fetch("/api/sheetsReagentReservations");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const filteredData = data.filter((item) => item.email === email);

      const dataWithIndex = filteredData.map((item, index) => ({
        ...item,
        originalIndex: index,
      }));

      setData(dataWithIndex);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      fetchData();
    }
  }, [email]);

  const filteredData = data
    .filter((item) =>
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reverse();

  const noResults = filteredData.length === 0 && searchTerm;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  console.log(filteredData);

  return (
    <>
      <StudentRoute>
        <div className="flex flex-col justify-between mb-10">
          <div className="mt-20 ml-10 mr-7 ">
            {/* Título principal */}
            <div className="flex flex-row gap-3">
              <ArrowBackIcon
                onClick={() => router.back()}
                style={{ marginTop: "25px" }}
                className="cursor-pointer hover:scale-110 transform-all"
              />

              <h1 className="font-['B612'] font-bold pt-5 text-3xl">
                Mis solicitudes de reactivos
              </h1>
            </div>

            {/* Buscador */}
            <div>
              <SearchIcon
                style={{
                  position: "absolute",
                  marginLeft: "20px",
                  marginTop: "32px",
                }}
              />
              <input
                className="w-11/12 pl-11 mt-5 bg-[#C0CCF0] p-3 rounded-xl ml-2 placeholder-black "
                type="text"
                placeholder="Buscar una solicitud de reactivo...."
                value={searchTerm}
                onChange={handleSearchChange}
              />

              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="ml-2"
                >
                  <ClearIcon style={{ marginLeft: "-70px" }} />
                </button>
              )}
            </div>
          </div>

          {/* Mapeo de la información de la reserva del estudiante */}
          <div className="px-5 rounded-lg lg:mr-12 mt-8">
            {noResults ? (
              <div
                className={`flex flex-col justify-center items-center bg-[#283C7C] p-10 rounded-md`}
              >
                <SentimentDissatisfiedIcon
                  style={{ width: "80px", height: "80px", color: "white" }}
                />
                <p className="font-['B612'] font-bold pt-3  text-white ">
                  {" "}
                  Ups, parece que no hay coincidencias
                </p>
              </div>
            ) : (
              filteredData.map((item, index) => (
                <div
                  className="px-4 mb-2"
                  key={item.originalIndex}
                >
                  <StudentReagentCard
                    key={item.originalIndex}
                    index={item.originalIndex}
                    date={item.date}
                    email={item.email}
                    request={item.request}
                    name={item.name}
                    DNI={item.DNI}
                    carnet={item.carnet}
                    partnerName={item.partnerName}
                    partnerDNI={item.partnerDNI}
                    partnerCarnet={item.partnerCarnet}
                    reagentName={item.reagentName}
                    CAS={item.CAS}
                    brand={item.brand}
                    quantity={item.quantity}
                    tutorName={item.tutorName}
                    profesorName={item.profesorName}
                    profesorDepartment={item.profesorDepartment}
                    status={item.status}
                    setEditIndex={setEditIndex}
                    setEditData={setEditData}
                    setDeleteIndex={setDeleteIndex}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </StudentRoute>
    </>
  );
};

export default SheetComponent;
