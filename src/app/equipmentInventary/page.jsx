"use client";

import React, { useState, useEffect } from "react";
import EquipmentCard from "@/components/equipmentCard/equipmentCard";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Spinner from "@/components/Spinner/spinner";
import ProfessorRoute from "@/ProfessorRoute/ProfessorRoute";
import Toaster from "@/components/toast/toaster";
import { useRouter } from "next/navigation";
import { ModalCreateEquipment } from "./modalCreate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Footer from "@/components/Footer/Footer";
import { professorFooterLinks } from "@/utils/footerUtils/professorFooterLinks";
import { equipmentDeleteURL } from "../api/routesURLs";

const SheetComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [toasterVisible, setToasterVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  //Función para actualizar la data en GoogleSheets
  const updateData = async (rowIndex, rowData) => {
    rowIndex = rowIndex + 4;
    try {
      const response = await fetch("/api/sheetsEquipmentUpdate", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rowIndex, rowData }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      fetchData();
      setToasterVisible(true);
      setTimeout(() => {
        setToasterVisible(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to update data", error);
    }
  };

  //Función para eliminar la data en GoogleSheets
  const deleteData = async (rowIndex) => {
    rowIndex = rowIndex + 4;
    const confirmDelete = window.confirm("¿Seguro que desea eliminar el ítem?");
    if (confirmDelete) {
      try {
        const response = await fetch(equipmentDeleteURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rowIndex }),
        });
        if (!response.ok) {
          console.log(response);
          throw new Error("Network response was not ok");
        }
        fetchData();
        setToasterVisible(true);
        setTimeout(() => {
          setToasterVisible(false);
        }, 3000);
      } catch (error) {
        console.error("Failed to delete data", error);
      }
    }
  };

  //Función para traer la data de GoogleSheets
  const fetchData = async () => {
    setToasterVisible(false);
    setLoading(true);
    try {
      const response = await fetch("/api/sheetsEquipment");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const dataWithIndex = data.map((item, index) => ({
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
    fetchData();
  }, []);

  useEffect(() => {
    if (deleteIndex !== null) {
      deleteData(deleteIndex);
    }
  }, [deleteIndex]);

  useEffect(() => {
    if (editIndex !== null && editData !== null) {
      updateData(editIndex, editData);
    }
  }, [editIndex, editData]);

  //Condicional para mostrar SPINNER si se está cargando
  if (isLoading)
    return (
      <>
        {" "}
        <h1 className="font-['B612'] ml-10 mt-20 font-bold pt-5 text-3xl">
          {" "}
          Inventario de Equipos{" "}
        </h1>{" "}
        <Spinner />{" "}
      </>
    );
  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

  // Funcionalidad para el buscador.
  const filteredData = data.filter((item) =>
    item.equipment.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const noResults = filteredData.length === 0;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <>
      <ProfessorRoute>
        <div className="mt-12 ml-10 mr-7">
          <div className="flex flex-row gap-3">
            <ArrowBackIcon
              onClick={() => router.back()}
              style={{ marginTop: "25px" }}
            />
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Inventario de Equipos
            </h1>
          </div>

          <div>
            <SearchIcon
              style={{
                position: "absolute",
                marginLeft: "20px",
                marginTop: "32px",
              }}
            />
            <input
              className="w-11/12 pl-11 mt-5 bg-[#FFF8E4] p-3 rounded-xl ml-2 "
              type="text"
              placeholder="Buscar un reactivo...."
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

          <div className="mt-5 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:mr-12 ">
            <p className=" font-['B612'] font-bold text-xl">Lista de Equipos</p>
            <div>
              <button
                className="bg-manz-200 text-black font-bold py-2 px-4 rounded"
                onClick={() => setOpen(true)}
              >
                Agregar Equipo
              </button>
              <ModalCreateEquipment
                open={open}
                setOpen={setOpen}
              />
            </div>
          </div>

          <div className="bg-manz-200 p-5 rounded-lg lg:mr-12">
            {noResults ? (
              <div className={`flex flex-col justify-center items-center`}>
                <SentimentDissatisfiedIcon
                  style={{ width: "80px", height: "80px", color: "white" }}
                />
                <p className="font-['B612'] font-bold pt-3  text-white ">
                  Ups, parece que no hay coincidencias
                </p>
              </div>
            ) : (
              filteredData.map((item, index) => (
                <EquipmentCard
                  key={item.originalIndex}
                  index={item.originalIndex}
                  equipment={item.equipment}
                  brand={item.brand}
                  model={item.model}
                  quantity={item.quantity}
                  ubication={item.ubication}
                  userManual={item.userManual}
                  frecuency={item.frecuency}
                  date={item.date}
                  observations={item.observations}
                  setEditIndex={setEditIndex}
                  setEditData={setEditData}
                  setDeleteIndex={setDeleteIndex}
                />
              ))
            )}
          </div>

          <div className="mt-20 ml-10 mr-7">
            <Toaster
              message="Inventario actualizado"
              isVisible={toasterVisible}
            />
          </div>
        </div>
        <Footer
          links={professorFooterLinks}
          footerColor="primary"
        />
      </ProfessorRoute>
    </>
  );
};

export default SheetComponent;
