"use client";

import React, { useState, useEffect } from "react";
import RequirePurchaseCard from "@/components/requirePurchaseCard/requierePurchaseCard";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from "@mui/icons-material/Clear";
import Spinner from "@/components/Spinner/spinner";
import Toaster from "@/components/toast/toaster";
import PrivateRoute from "@/privateRoute/privateRoute";
import { useRouter } from "next/navigation";
import { ModalCreatePurchase } from "./modalCreate";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';



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

  const fetchData = async () => {
    setToasterVisible(false);
    setLoading(true);
    try {
      const response = await fetch("/api/sheetsRequirePurchase");
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

  const updateData = async (rowIndex, rowData) => {
    rowIndex = rowIndex + 4;
    try {
      const response = await fetch("/api/sheetsRequirePurchaseUpdate", {
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

  if (isLoading)
    return (
      <>
        <div className="flex flex-row gap-3 mt-20 ml-8">
            <ArrowBackIcon  onClick={() => router.back()} style={{marginTop: "25px"}}/>
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Compras Requeridas
            </h1>
          </div>
        <Spinner />
      </>
    );
  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

  const deleteData = async (rowIndex) => {
    rowIndex = rowIndex + 4;
    const confirmDelete = window.confirm("¿Seguro que desea eliminar el ítem?");
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/sheetsRequirePurchaseDelete`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
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
  
  const filteredData = data.filter((item) =>
    item.material.toLowerCase().includes(searchTerm.toLowerCase())
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
      <PrivateRoute>
        <div className="mt-20 ml-10 mr-7">

          <div className="flex flex-row gap-3">
            <ArrowBackIcon  onClick={() => router.back()} style={{marginTop: "25px"}}/>
            <h1 className="font-['B612'] font-bold pt-5 text-3xl">
              Compras Requeridas
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
            <p className=" font-['B612'] font-bold text-xl">
              Lista de Materiales/ Equipos requeridos
            </p>
            <div>
              <button 
              className="bg-manz-200 text-black font-bold py-2 px-4 rounded"
              onClick={() => setOpen(true)}> 
                Agregar material
              </button>
              <ModalCreatePurchase  open={open} setOpen={setOpen}/>  
            </div>
          </div>

          <div className="bg-manz-200 p-5 rounded-lg lg:mr-12">
            {noResults ? (
              <div className={`flex flex-col justify-center items-center`}>
                <SentimentDissatisfiedIcon style={{ width: '80px', height: '80px', color: 'white'}} />
                <p className="font-['B612'] font-bold pt-3  text-white ">Ups, parece que no hay coincidencias</p>
              </div>
            ) : (
              filteredData.map((item, index) => (
                <RequirePurchaseCard
                  key={item.originalIndex}
                  index={item.originalIndex}
                  material={item.material}
                  capacity={item.capacity}
                  brand={item.brand}
                  quantity={item.quantity}
                  price = {item.price}
                  status = {item.status}
                  observations={item.observations}
                  setEditIndex={setEditIndex}
                  setEditData={setEditData}
                  setDeleteIndex = {setDeleteIndex}
                  />
              ))
            )}
          </div>
          {/* Para Mostrar mensaje de exito */}
          <div className="mt-20 ml-10 mr-7">
            <Toaster
              message="Lista actualizada"
              isVisible={toasterVisible}
            />
          </div>

          {/* Para mostrar no coincidencia en resultados */}
         

        </div>
      </PrivateRoute>
    </>
  );
};

export default SheetComponent;
