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
import { researchCreateURL } from "../api/routesURLs";

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
export const ModalCreateResearch = ({
  open,
  setOpen,
  setToasterProperties,
  showToast,
}) => {
  // Valores del formulario
  const [formData, setFormData] = useState({
    students: " ",
    tesis: " ",
    startDate: " ",
    endDate: " ",
    observations: " ",
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
      const response = await fetch(researchCreateURL, {
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
          toasterMessage: "Se ha agregado el trabajo de investigación",
          typeColor: "success",
        });
        handleClose();
      } else {
        console.error("Error en el servidor al añadir fila");
        setToasterProperties({
          toasterMessage: "No se ha agregado el trabajo de investigación",
          typeColor: "error",
        });
        handleClose();
      }
    } catch (error) {
      console.error("Error al enviar datos al servidor:", error);
      setToasterProperties({
        toasterMessage: "No se ha agregado el trabajo de investigación",
        typeColor: "error",
      });
      handleClose();
    }
    setFormData({
      students: " ",
      tesis: " ",
      startDate: " ",
      endDate: " ",
      observations: " ",
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
              Añadir nuevo Trabajo de Investigación
            </Typography>

            <Button onClick={handleClose}>
              {" "}
              <CloseIcon style={{ color: "black" }} />{" "}
            </Button>
          </div>

          {/* Añadir estudiantes */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3 mt-4">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Estudiantes:{" "}
            </h3>
            <input
              name="students"
              value={formData.students}
              onChange={handleChange}
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
            />
          </div>

          {/* Añadir capacidad */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Tesis:{" "}
            </h3>
            <input
              name="tesis"
              value={formData.tesis}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
            />
          </div>

          {/* Añadir fecha inicio */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Fecha inicio:{" "}
            </h3>
            <input
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
            />
          </div>

          {/* Añadir fecha fin */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Fecha fin:{" "}
            </h3>
            <input
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
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
