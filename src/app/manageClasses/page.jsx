"use client";

import "../globals.css";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner/spinner";
import Toaster from "@/components/toast/toaster";
import ProfessorRoute from "@/ProfessorRoute/ProfessorRoute";
import ClassesList from "@/components/ClassesCard/ClassesList";
import ClassesCard from "@/components/ClassesCard/ClassesCard";

export default function ManageClasses() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [toasterVisible, setToasterVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  //Función para actualizar la data en GoogleSheets
  const updateData = async (rowIndex, rowData) => {
    rowIndex = rowIndex + 4;
    try {
      const response = await fetch("/api/sheetsClassesUpdate", {
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
      console.log("result", result);
      fetchData();
      setToasterVisible(true);
      setTimeout(() => {
        setToasterVisible(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to update data", error);
    }
  };

  //Función para traer la data de GoogleSheets
  const fetchData = async () => {
    setToasterVisible(false);
    setLoading(true);
    try {
      const response = await fetch("/api/sheetsClasses");
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
    if (editIndex !== null && editData !== null) {
      updateData(editIndex, editData);
    }
  }, [editIndex, editData, updateData]);

  //Condicional para evaluar si está cargando y mostrar Spinner
  if (isLoading)
    return (
      <>
        {" "}
        <h1 className="font-['B612'] ml-10 mt-20 font-bold pt-5 text-3xl">
          {" "}
          Horario de Clases{" "}
        </h1>{" "}
        <Spinner />{" "}
      </>
    );
  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

  return (
    <ProfessorRoute>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-12 ml-10 mr-7">
          <h1 className="font-['B612'] font-bold pt-2 text-3xl">
            Horario de Clases
          </h1>

          {/* Lista de clases */}
          <div className="bg-manz-200 p-5 rounded-lg lg:mr-12">
            <ClassesList
              data={data}
              setEditIndex={setEditIndex}
              setEditData={setEditData}
            />
          </div>

          <div className="mt-20 ml-10 mr-7">
            <Toaster
              message="Horario de clases actualizado"
              isVisible={toasterVisible}
            />
          </div>
        </div>
      )}
    </ProfessorRoute>
  );
}
