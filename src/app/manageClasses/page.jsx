"use client";

import "../globals.css";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner/spinner";
import Toaster from "@/components/toast/toaster";
import PrivateRoute from "@/privateRoute/privateRoute";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClassesList from "@/components/ClassesCard/ClassesList";
import { ModalAddClass } from "./modalAddClass";
import { useRouter } from "next/navigation";

export default function ManageClasses() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [toasterVisible, setToasterVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);

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

  const deleteData = async (rowIndex) => {
    rowIndex = rowIndex + 4;
    const confirmDelete = window.confirm("¿Seguro que desea eliminar el ítem?");
    if (confirmDelete) {
      try {
        const response = await fetch("/api/sheetsClassesDelete", {
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

  useEffect(() => {
    if (editIndex !== null && editData !== null) {
      updateData(editIndex, editData);
    }
  }, [editIndex, editData]);

  useEffect(() => {
    if (deleteIndex !== null) {
      deleteData(deleteIndex);
    }
  }, [deleteIndex]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (message !== "") {
      setToasterVisible(true);
      console.log(toasterVisible);
      setTimeout(() => {
        setToasterVisible(false);
      }, 3000);
    }
  }, [toasterVisible]);

  if (isLoading)
    return (
      <>
        <div className="flex flex-row gap-3 mt-20 ml-8">
          <ArrowBackIcon
            onClick={() => router.back()}
            style={{ marginTop: "25px" }}
          />
          <h1 className="font-['B612'] font-bold pt-5 text-3xl">
            Horario de Clases
          </h1>
        </div>
        <Spinner />
      </>
    );
  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

  return (
    <PrivateRoute>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-12 ml-10 mr-7">
          <div className="flex flex-row gap-3">
            <ArrowBackIcon
              onClick={() => router.back()}
              style={{ marginTop: "25px" }}
            />
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Horario de Clases
            </h1>
          </div>

          <div className="mt-5 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:mr-12 ">
            <p className=" font-['B612'] font-bold text-xl">Lista de Clases</p>

            <div>
              <button
                className="bg-manz-200 text-black font-bold py-2 px-4 rounded"
                onClick={() => setOpen(true)}
              >
                Agregar clase
              </button>
              <ModalAddClass
                open={open}
                setOpen={setOpen}
                isVisible={setToasterVisible}
                message={setMessage}
              />
            </div>
          </div>

          {/* Lista de clases */}
          <div className="bg-manz-200 p-5 rounded-lg lg:mr-12">
            <ClassesList
              data={data}
              setEditIndex={setEditIndex}
              setEditData={setEditData}
              setDeleteIndex={setDeleteIndex}
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
    </PrivateRoute>
  );
}
