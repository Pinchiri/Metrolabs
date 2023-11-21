"use client";
import { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Toaster from "@/components/toast/toaster";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

// Valores del comboBox de status
const trimesterLabels = [
  { label: "Enero-Marzo", trimester: "Enero-Marzo" },
  { label: "Abril-Junio", trimester: "Abril-Junio" },
  { label: "Septiembre-Noviembre", trimester: "Septiembre-Noviembre" },
];

const daysLabels = [
  { label: "Lunes-Miércoles", day: "Lunes-Miércoles" },
  { label: "Miércoles-Viernes", day: "Miércoles-Viernes" },
  { label: "Martes-Jueves", day: "Martes-Jueves" },
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

export const ModalAddClass = ({
  open,
  setOpen,
  isVisible = { setToasterVisible },
  message = { setMessage },
}) => {
  const [minH, setMinH] = useState(
    dayjs().set("hour", 7).startOf("hour").set("minute", 5)
  );
  const [maxH, setMaxH] = useState(dayjs().set("hour", 19).startOf("hour"));

  // Valores del formulario
  const [formData, setFormData] = useState({
    className: "",
    professor: "",
    trimester: "",
    day: "",
    start: "",
    end: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    // primero validamos que ningun dato este vacio
    for (const key in formData) {
      if (formData[key] === "") {
        message("Por favor, rellene todos los campos");
        isVisible(true);
        handleClose();
        return;
      }
    }

    try {
      console.log(formData);
      const response = await fetch("/api/sheetsClassesCreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Resultado de Google Sheets:", result);
        message("Horario de clases actualizado");
        isVisible(true);
        handleClose();
      } else {
        console.error("Error en el servidor al añadir fila");
        console.log(response);
        handleClose();
        message("Error al enviar datos al servidor");
        isVisible(true);
      }
    } catch (error) {
      console.error("Error al enviar datos al servidor:", error);
      handleClose();
    }
    setFormData({
      className: "",
      professor: "",
      trimester: "",
      day: "",
      start: "",
      end: "",
    });
  };

  // useEffect(() => {
  //     if (toasterVisible) {
  //         const timer = setTimeout(() => {
  //             setToasterVisible(false);
  //         }, 3000);

  //         return () => clearTimeout(timer);
  //     }
  // }, [toasterVisible]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    console.log(formData.start);
    console.log(formData.end);
  }, [minH, maxH]);

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
              Añadir nueva clase
            </Typography>

            <Button onClick={handleClose}>
              {" "}
              <CloseIcon style={{ color: "black" }} />{" "}
            </Button>
          </div>

          {/* Añadir clase */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3 mt-4">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Clase:{" "}
            </h3>
            <input
              name="className"
              value={formData.material}
              onChange={handleChange}
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
            />
          </div>

          {/* Añadir profesor */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Profesor:{" "}
            </h3>
            <input
              name="professor"
              value={formData.professor}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
            />
          </div>

          {/* Añadir trimestre */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Trimestre:{" "}
            </h3>
            <Select
              labelId="trimester-label"
              id="trimester"
              name="trimester"
              value={formData.trimester}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              sx={{ height: "50px", width: "100%", backgroundColor: "white" }}
            >
              {trimesterLabels.map((option) => (
                <MenuItem
                  key={option.trimester}
                  value={option.trimester}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </div>

          {/* Añadir dias */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Días de clases:{" "}
            </h3>
            <Select
              labelId="day-label"
              id="day"
              name="day"
              value={formData.day}
              onChange={handleChange}
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              sx={{ height: "50px", width: "100%", backgroundColor: "white" }}
            >
              {daysLabels.map((option) => (
                <MenuItem
                  key={option.day}
                  value={option.day}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </div>

          {/* Añadir hora */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Hora de inicio:{" "}
            </h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                value={formData.start}
                onChange={(newValue) => {
                  const newStartValue = dayjs(newValue);
                  if (newStartValue.isValid() && newStartValue.isBefore(maxH)) {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      start: newStartValue.format("HH:mm"),
                    }));
                    // Update minH to be 5 minutes after the start time
                    setMinH(newStartValue.add(5, "minute"));
                  } else {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      start: "",
                    }));
                  }
                }}
                renderInput={(params) => <TextField {...params} />}
                sx={{ height: "100%", width: "100%", backgroundColor: "white" }}
                minTime={dayjs().set("hour", 7).startOf("hour")}
                maxTime={maxH}
              />
            </LocalizationProvider>
          </div>

          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Hora de finalización:{" "}
            </h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                value={formData.end}
                onChange={(newValue) => {
                  const newEndValue = dayjs(newValue);
                  if (newEndValue.isValid() && newEndValue.isAfter(minH)) {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      end: newEndValue.format("HH:mm"),
                    }));
                    // Update maxH to be 5 minutes before the end time
                    setMaxH(newEndValue.subtract(5, "minute"));
                  } else {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      end: "",
                    }));
                    set;
                  }
                }}
                renderInput={(params) => <TextField {...params} />}
                sx={{ height: "100%", width: "100%", backgroundColor: "white" }}
                minTime={minH}
                maxTime={dayjs().set("hour", 19).startOf("hour")} // Consider using maxH if it should be dynamic
              />
            </LocalizationProvider>
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
      {/* 
            <div className="mt-20 ml-10 mr-7">
                <Toaster
                    message={toasterMessage}
                    isVisible={toasterVisible}
                />
            </div> */}
    </div>
  );
};
