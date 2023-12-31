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
import { requiredPurchasesCreateURL } from "../api/routesURLs";

// Valores del comboBox de status
const statusLabels = [
  { label: "Pendiente", status: "Pediente" },
  { label: "Solicitado", status: "Solicitado" },
  { label: "Comprado", status: "Comprado" },
];

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
export const ModalCreatePurchase = ({
  open,
  setOpen,
  setToasterProperties,
  showToast,
}) => {
  const [toasterVisible, setToasterVisible] = useState(false);

  // Valores del formulario
  const [formData, setFormData] = useState({
    material: "",
    capacity: "",
    brand: "",
    quantity: "",
    price: "",
    status: "",
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
      const response = await fetch(requiredPurchasesCreateURL, {
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
          toasterMessage: "Se ha agregado la compra requerida",
          typeColor: "success",
        });
        handleClose();
      } else {
        console.error("Error en el servidor al añadir fila");
        setToasterProperties({
          toasterMessage: "No se ha podido agregar la compra requerida",
          typeColor: "error",
        });
        handleClose();
      }
    } catch (error) {
      setToasterProperties({
        toasterMessage: "No se ha podido agregar la compra requerida",
        typeColor: "error",
      });
      console.error("Error al enviar datos al servidor:", error);
      handleClose();
    }
    setFormData({
      material: "",
      capacity: "",
      brand: "",
      quantity: "",
      price: "",
      status: "",
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
              Añadir nuevo requerimiento de compra
            </Typography>

            <Button onClick={handleClose}>
              {" "}
              <CloseIcon style={{ color: "black" }} />{" "}
            </Button>
          </div>

          {/* Añadir material */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3 mt-4">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Material:{" "}
            </h3>
            <input
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Añadir un material requerido...."
              type="text"
            />
          </div>

          {/* Añadir capacidad */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Capacidad:{" "}
            </h3>
            <input
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Añada la capacidad...."
              type="text"
            />
          </div>

          {/* Añadir marca */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Marca:{" "}
            </h3>
            <input
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Añadir una marca...."
              type="text"
            />
          </div>

          {/* Añadir cantidad */}
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
              placeholder="Añadir una cantidad...."
              type="number"
            />
          </div>

          {/* Añadir precio */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Precio:{" "}
            </h3>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Añadir un precio...."
              type="text"
            />
          </div>

          {/* Añadir Status */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Status:{" "}
            </h3>
            <Autocomplete
              disablePortal
              id="status-autocomplete"
              options={statusLabels}
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
                  placeholder="Selecciona un estado"
                />
              )}
            />
          </div>

          {/* Añadir Comentarios */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Comentarios:{" "}
            </h3>
            <input
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              placeholder="Añadir una observación...."
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
