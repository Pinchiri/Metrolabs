"use client";

import "../globals.css";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner/spinner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClassesList from "@/components/ClassesCard/ClassesList";
import { ModalAddClass } from "./modalAddClass";
import { useRouter } from "next/navigation";
import ProfessorRoute from "@/ProfessorRoute/ProfessorRoute";
import Footer from "@/components/Footer/Footer";
import { professorFooterLinks } from "@/utils/footerUtils/professorFooterLinks";
import Toast from "@/components/Toaster/Toast";
import { useToaster } from "@/components/Toaster/hooks/useToaster.jsx";
import {
  classesDeleteURL,
  classesURL,
  classesUpdateURL,
} from "../api/routesURLs";

export default function ManageClasses() {
  const { isVisible, showToast, toasterProperties, setToasterProperties } =
    useToaster();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [reloadData, setReloadData] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(classesURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data.map((item, index) => ({ ...item, originalIndex: index })));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (rowIndex, rowData) => {
    setLoading(true);
    rowIndex = rowIndex + 4;
    try {
      const response = await fetch(classesUpdateURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rowIndex,
          rowData,
        }),
      });
      if (!response.ok) {
        await fetchData();
        setLoading(false);
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("result", result);
      await fetchData();
      setToasterProperties({
        toasterMessage: "Se ha actualizado la clase exitosamente!",
        typeColor: "success",
      });
    } catch (error) {
      console.error("Failed to update data", error);
      setToasterProperties({
        toasterMessage: "No se ha podido actualizar la clase",
        typeColor: "error",
      });
      setEditIndex(null);
      showToast();
      setLoading(false);
    }

    setEditIndex(null);
    showToast();
    setLoading(false);
  };

  const deleteData = async (rowIndex) => {
    rowIndex = rowIndex + 4;
    const confirmDelete = window.confirm("¿Seguro que desea eliminar el ítem?");
    if (confirmDelete) {
      setLoading(true);
      try {
        const response = await fetch(classesDeleteURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rowIndex }),
        });

        if (!response.ok) {
          console.log(response);
          setLoading(false);
          setToasterProperties({
            toasterMessage: "No se ha podido eliminar la clase",
            typeColor: "error",
          });
          showToast();
          throw new Error("Network response was not ok");
        }
        await fetchData();
        setToasterProperties({
          toasterMessage: "Se ha eliminado la clase exitosamente!",
          typeColor: "success",
        });
      } catch (error) {
        console.error("Failed to delete data", error);
        setToasterProperties({
          toasterMessage: "No se ha podido eliminar la clase",
          typeColor: "error",
        });
        setDeleteIndex(null);
        setLoading(false);
      }
      setDeleteIndex(null); //para que no se quede en el estado de eliminado
      setLoading(false);
      showToast();
    }
  };

  useEffect(() => {
    if (reloadData || editIndex !== null || deleteIndex !== null) {
      fetchData();
      setReloadData(false);
    }
  }, [reloadData, editIndex, deleteIndex]);

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
  }, [editData, deleteIndex]);

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    if (isLoading) {
      return (
        <>
          <div className="flex flex-row gap-3 mt-20 ml-8">
            <ArrowBackIcon
              onClick={() => router.back()}
              style={{ marginTop: "25px" }}
            />
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Horarios de Clases
            </h1>
          </div>
          <Spinner />
        </>
      );
    }

    return (
      <ProfessorRoute>
        <div className=" gap-3 p-8">
          <div className="flex flex-row gap-3 ">
            <ArrowBackIcon
              onClick={() => router.back()}
              style={{ marginTop: "25px" }}
            />
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Horarios de Clases
            </h1>
          </div>

          <div className="mt-5 mb-5 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:mr-12 ">
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
                fetchData={fetchData}
                setToasterProperties={setToasterProperties}
                showToast={showToast}
                setLoading={setLoading}
                data={data}
                onClassAdded={() => setReloadData(true)}
              />
            </div>
          </div>

          {/* Este div ha sido movido fuera de la estructura flex anterior y se le ha quitado la clase hover */}
          <div className="w-full h-96 bg-white rounded-lg ml-8 lg:mr-12 flex flex-col justify-center items-center text-center">
            <h3 className="font-['B612'] font-bold pt-1 text-xl">
              No hay clases creadas. Empieza a crear clases ahora!
            </h3>
          </div>
        </div>
        <Footer
          links={professorFooterLinks}
          footerColor="primary"
        />
      </ProfessorRoute>
    );
  }

  if (isLoading) {
    return (
      <>
        <div className="flex flex-row gap-3 mt-20 ml-8">
          <ArrowBackIcon
            onClick={() => router.back()}
            style={{ marginTop: "25px" }}
          />
          <h1 className="font-['B612'] font-bold pt-5 text-3xl">
            Horarios de Clases
          </h1>
        </div>
        <Spinner />

        <Footer
          links={professorFooterLinks}
          footerColor="primary"
        />
      </>
    );
  }

  return (
    <ProfessorRoute>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-12 ml-10 mr-7">
          {isVisible ? (
            <Toast
              message={toasterProperties.toasterMessage}
              typeColor={toasterProperties.typeColor}
              isVisible={isVisible}
            />
          ) : (
            <></>
          )}
          <div className="flex flex-row gap-3">
            <ArrowBackIcon
              onClick={() => router.back()}
              style={{ marginTop: "25px" }}
            />
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Horarios de Clases
            </h1>
          </div>

          <div className="mt-5 mb-5 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:mr-12 ">
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
                fetchData={fetchData}
                setToasterProperties={setToasterProperties}
                showToast={showToast}
                setLoading={setLoading}
                data={data}
                onClassAdded={() => setReloadData(true)}
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
              setToasterProperties={setToasterProperties}
              showToast={showToast}
            />
          </div>
        </div>
      )}

      <Footer
        links={professorFooterLinks}
        footerColor="primary"
      />
    </ProfessorRoute>
  );
}
