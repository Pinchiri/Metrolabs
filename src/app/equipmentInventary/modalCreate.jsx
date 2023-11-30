"use client";
import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Typography,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Toaster from "@/components/toast/toaster";
import { frecuencyLabels } from "./comboBoxData";
import { equipmentCreateURL } from "../api/routesURLs";

// Estilos de la ventana Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Componente de la ventana Modal PPD
export const ModalCreateEquipment = ({
  open,
  setOpen,
  setToasterProperties,
  showToast,
}) => {
  // Valores del formulario
  const [formData, setFormData] = useState({
    equipment: "",
    brand: "",
    model: "",
    quantity: "",
    ubication: "",
    userManual: "",
    frecuency: "",
    date: "",
    observations: "",
  });

  // Manejador de cambios en el formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Manejadore de cierre de la ventana Modal
  const handleClose = () => {
    setOpen(false);
  };

  // Manejador de envío de datos al servidor
  const handleSubmit = async () => {
    try {
      const response = await fetch(equipmentCreateURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Resultado de Google Sheets:", result);
        setToasterProperties({
          toasterMessage: "Se ha agregado el equipo",
          typeColor: "success",
        });
        handleClose();
      } else {
        setToasterProperties({
          toasterMessage: "No se ha podido agregar el equipo",
          typeColor: "error",
        });
        console.error("Error en el servidor al añadir fila");
        handleClose();
      }
    } catch (error) {
      setToasterProperties({
        toasterMessage: "No se ha podido agregar el equipo",
        typeColor: "error",
      });
      console.error("Error al enviar datos al servidor:", error);
      handleClose();
    }
    setFormData({
      equipment: "",
      brand: "",
      model: "",
      quantity: "",
      ubication: "",
      userManual: "",
      frecuency: "",
      date: "",
      observations: "",
    });
    showToast();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-row justify-between">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h1"
              className="text-sm md:text-lg lg:text-xl"
              style={{ fontWeight: "bold", fontFamily: "B612, sans-serif" }}
            >
              Añadir nuevo Equipo al inventario
            </Typography>

            <Button onClick={handleClose}>
              {" "}
              <CloseIcon style={{ color: "black" }} />{" "}
            </Button>
          </div>

          {/* Añadir Material */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3 mt-4">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Equipo:{" "}
            </h3>
            <input
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Nombre del material..."
              type="text"
            />
          </div>

          {/* Añadir Marca */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Marca:{" "}
            </h3>
            <input
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Nombre de la marca..."
              type="text"
            />
          </div>

          {/* Añadir Modelo */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Modelo:{" "}
            </h3>
            <input
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Nombre del modelo..."
              type="text"
            />
          </div>

          {/* Añadir Quantity */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Cantidad:{" "}
            </h3>
            <input
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Cantidad..."
              type="number"
            />
          </div>

          {/* Añadir Manual de Usuario */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Manual de Usuario:{" "}
            </h3>
            <input
              name="userManual"
              value={formData.userManual}
              onChange={handleChange}
              placeholder="Añada el manual de usario..."
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="file"
            />
          </div>

          {/* Añadir Frecuencia */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Frecuencia Mant:{" "}
            </h3>
            <Autocomplete
              disablePortal
              id="status-autocomplete"
              options={frecuencyLabels}
              sx={{
                height: "50px",
                width: "100%",
                backgroundColor: "white",
                "& .MuiAutocomplete-inputRoot": { bgcolor: "white" },
              }}
              getOptionLabel={(option) => option.label}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  status: newValue ? newValue.status : "",
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Selecciona una frecuencia"
                />
              )}
            />
          </div>

          {/* Añadir último mantenimiento */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Fecha último Mant:{" "}
            </h3>
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Añada el último mantenimiento"
              type="date"
            />
          </div>

          {/* Añadir Observaciones */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Observaciones:{" "}
            </h3>
            <input
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Añada las ultimas observaciones"
              type="text"
            />
          </div>

          {/* Añadir Botón de enviar */}

          <div className="flex flex-row justify-end">
            <button
              className="bg-manz-200 text-black font-bold py-2 px-4 rounded text-sm md:text-lg lg:text-xl mt-2"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
