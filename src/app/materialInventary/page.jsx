"use client";

import React, { useState, useEffect } from "react";
import MaterialCard from "@/components/materialCard/materialCard";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import Spinner from "@/components/Spinner/spinner";
import Toaster from "@/components/toast/toaster";
import ProfessorRoute from "@/ProfessorRoute/ProfessorRoute";
import { useRouter } from "next/navigation";
import { ModalCreateMaterial } from "./modalCreate";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Footer from "@/components/Footer/Footer";
import { professorFooterLinks } from "@/utils/footerUtils/professorFooterLinks";
import {
  materialDeleteURL,
  materialURL,
  materialUpdateURL,
} from "../api/routesURLs";
import { useToaster } from "@/components/Toaster/hooks/useToaster";
import Toast from "@/components/Toaster/Toast";

const SheetComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [toasterVisible, setToasterVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { isVisible, showToast, toasterProperties, setToasterProperties } =
    useToaster();

  //Función para actualizar la data en GoogleSheets
  const updateData = async (rowIndex, rowData) => {
    rowIndex = rowIndex + 4;
    try {
      const response = await fetch(materialUpdateURL, {
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
      setToasterProperties({
        toasterMessage: "Se ha editado el material",
        typeColor: "success",
      });
      showToast();
    } catch (error) {
      setToasterProperties({
        toasterMessage: "No se ha podido editar el material",
        typeColor: "error",
      });
      showToast();
      console.error("Failed to update data", error);
    }
  };

  //Función para eliminar la data de GoogleSheets
  const deleteData = async (rowIndex) => {
    rowIndex = rowIndex + 4;
    const confirmDelete = window.confirm("¿Seguro que desea eliminar el ítem?");
    if (confirmDelete) {
      try {
        const response = await fetch(materialDeleteURL, {
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
        setToasterProperties({
          toasterMessage: "Se ha borrado el material",
          typeColor: "success",
        });
        showToast();
      } catch (error) {
        setToasterProperties({
          toasterMessage: "No se ha podido borrar el material",
          typeColor: "error",
        });
        showToast();
        console.error("Failed to delete data", error);
      }
    }
    setDeleteIndex(-1);
  };

  //Función para traer la data de GoogleSheets

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(materialURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const dataWithIndex = data
        .map((item, index) => ({
          ...item,
          originalIndex: index,
        }))
        .reverse();

      setData(dataWithIndex);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [toasterProperties]);

  useEffect(() => {
    if (editIndex != null && editData != null) {
      updateData(editIndex, editData);
    }
  }, [editData]);

  useEffect(() => {
    if (deleteIndex > -1) {
      deleteData(deleteIndex);
    }
  }, [deleteIndex]);

  // Condicional para mostrar spinner de carga
  if (isLoading)
    return (
      <>
        {" "}
        <h1 className="font-['B612'] ml-10 mt-20 font-bold pt-5 text-3xl">
          {" "}
          Inventario de Materiales{" "}
        </h1>{" "}
        <Spinner />{" "}
      </>
    );
  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

  // Funcionalidad de la barra buscadora
  const filteredData = data.filter((item) =>
    item.material.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="mt-20 ml-10 mr-7">
          {isVisible && (
            <Toast
              message={toasterProperties.toasterMessage}
              isVisible={isVisible}
              typeColor={toasterProperties.typeColor}
            />
          )}
          <div className="flex flex-row gap-3">
            <ArrowBackIcon
              onClick={() => router.back()}
              style={{ marginTop: "25px" }}
            />
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Inventario de Materiales
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
              placeholder="Ingrese el nombre del material"
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
            <p className=" font-['B612'] font-bold text-xl">
              Lista de Materiales
            </p>
            <div className="mb-20">
              <button
                className="bg-manz-200 text-black font-bold py-2 px-4 rounded"
                onClick={() => setOpen(true)}
              >
                Agregar material
              </button>
              <ModalCreateMaterial
                open={open}
                setOpen={setOpen}
                setToasterProperties={setToasterProperties}
                showToast={showToast}
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
                <MaterialCard
                  key={item.originalIndex}
                  index={item.originalIndex}
                  material={item.material}
                  capacity={item.capacity}
                  brand={item.brand}
                  quantity={item.quantity}
                  ubication={item.ubication}
                  observations={item.observations}
                  setEditIndex={setEditIndex}
                  setEditData={setEditData}
                  setDeleteIndex={setDeleteIndex}
                />
              ))
            )}
          </div>
        </div>
      </ProfessorRoute>
    </>
  );
};

export default SheetComponent;
