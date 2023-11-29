"use client";

import React, { useState, useEffect } from "react";
import ResearchCard from "@/components/researchCard/researchCard";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import Spinner from "@/components/Spinner/spinner";
import Toaster from "@/components/toast/toaster";
import ProfessorRoute from "@/ProfessorRoute/ProfessorRoute";
import { useRouter } from "next/navigation";
import { ModalCreateResearch } from "./modalCreate";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Footer from "@/components/Footer/Footer";
import { professorFooterLinks } from "@/utils/footerUtils/professorFooterLinks";
import {
  researchDeleteURL,
  researchURL,
  researchUpdateURL,
} from "../api/routesURLs";
import { useToaster } from "@/components/Toaster/hooks/useToaster";
import Toast from "@/components/Toaster/Toast";

const SheetComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { isVisible, showToast, toasterProperties, setToasterProperties } =
    useToaster();

  //Función para traer la data en GoogleSheets
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(researchURL);
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

  //Función para actualizar la data en GoogleSheets
  const updateData = async (rowIndex, rowData) => {
    rowIndex = rowIndex + 4;
    try {
      const response = await fetch(researchUpdateURL, {
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
      setToasterProperties({
        toasterMessage: "Se ha editado el trabajo de investigación",
        typeColor: "success",
      });
    } catch (error) {
      setToasterProperties({
        toasterMessage: "No se ha podido editar el trabajo de investigación",
        typeColor: "error",
      });
      console.error("Failed to update data", error);
    }
    showToast();
  };

  //Función para eliminar la data en GoogleSheets
  const deleteData = async (rowIndex) => {
    rowIndex = rowIndex + 4;
    const confirmDelete = window.confirm("¿Seguro que desea eliminar el ítem?");
    if (confirmDelete) {
      try {
        const response = await fetch(researchDeleteURL, {
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
        setToasterProperties({
          toasterMessage: "Se ha borrado el trabajo de investigación",
          typeColor: "success",
        });
      } catch (error) {
        setToasterProperties({
          toasterMessage: "No se ha podido borrar el trabajo de investigación",
          typeColor: "error",
        });

        console.error("Failed to update data", error);
      }
    }
    showToast();
    setDeleteIndex(-1);
  };

  useEffect(() => {
    fetchData();
  }, [toasterProperties]);

  useEffect(() => {
    if (editIndex !== null && editData !== null) {
      updateData(editIndex, editData);
    }
  }, [editIndex, editData]);

  useEffect(() => {
    if (deleteIndex > -1) {
      deleteData(deleteIndex);
    }
  }, [deleteIndex]);

  // Para mostrar el spinner de carga
  if (isLoading)
    return (
      <>
        <div className="flex flex-row gap-3 mt-20 ml-8">
          <ArrowBackIcon
            onClick={() => router.back()}
            style={{ marginTop: "25px" }}
          />
          <h1 className="font-['B612'] font-bold pt-5 text-3xl">
            Trabajo de Investigación
          </h1>
        </div>
        <Spinner />
      </>
    );
  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

  // Para filtrar la data por el input de búsqueda
  const filteredData = data.filter((item) =>
    item.tesis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const noResults = filteredData.length === 0 && searchTerm;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <>
      <ProfessorRoute>
        {isVisible && (
          <Toast
            message={toasterProperties.toasterMessage}
            isVisible={isVisible}
            typeColor={toasterProperties.typeColor}
          />
        )}
        <div className="mt-20 ml-10 mr-7 mb-10">
          <div className="flex flex-row gap-3">
            <ArrowBackIcon
              onClick={() => router.back()}
              style={{ marginTop: "25px" }}
              className="cursor-pointer hover:scale-110 transform-all"
            />
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Trabajos de Investigación desarrollados en el Laboratorio
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
              placeholder="Ingrese el nombre del trabajo de investigación"
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
              Lista de Trabajos de investigación en el Laboratorio
            </p>
            <div className="mb-20">
              <button
                className="bg-manz-200 text-black font-bold py-2 px-4 rounded"
                onClick={() => setOpen(true)}
              >
                Agregar Trabajo
              </button>
              <ModalCreateResearch
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
                <ResearchCard
                  key={item.originalIndex}
                  index={item.originalIndex}
                  students={item.students}
                  tesis={item.tesis}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  observations={item.observations}
                  setEditIndex={setEditIndex}
                  setEditData={setEditData}
                  setDeleteIndex={setDeleteIndex}
                />
              ))
            )}
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
