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
  InputLabel,
  FormControl,
} from "@mui/material";
import Toaster from "@/components/toast/toaster";
import CloseIcon from "@mui/icons-material/Close";
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

export const ModalAddClass = ({ open, setOpen }) => {
  const [toasterVisible, setToasterVisible] = useState(false);
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
    console.log(formData);

    for (const key in formData) {
      if (formData[key] === "") {
        handleClose();
        return;
      }
    }

    try {
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
        setToasterVisible(true);
        handleClose();
      } else {
        console.error("Error en el servidor al añadir fila");
        console.log(response);
        handleClose();
        setToasterVisible(true);
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

  useEffect(() => {
    if (toasterVisible) {
      const timer = setTimeout(() => {
        setToasterVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toasterVisible]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
              value={formData.className}
              onChange={handleChange}
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              placeholder="Ej. Procesos de Separación"
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
              className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              placeholder="Ej. Dr. Juan Pérez"
            />
          </div>

          {/* Añadir trimestre */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Trimestre:{" "}
            </h3>
            <FormControl className="rounded-lg p-2 hover:border-2 hover:border-amber-300">
              <InputLabel id="trimester-label">Trimestre</InputLabel>
              <Select
                label="Trimestre"
                id="trimester"
                name="trimester"
                value={formData.trimester}
                onChange={handleChange}
                sx={{
                  height: "45px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
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
            </FormControl>
          </div>

          {/* Añadir dias */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Días de clases:{" "}
            </h3>
            <FormControl className="rounded-lg p-2 hover:border-2 hover:border-amber-300">
              <InputLabel id="day-label">Día</InputLabel>
              <Select
                label="Día"
                id="day"
                name="day"
                value={formData.day}
                onChange={handleChange}
                sx={{
                  height: "45px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
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
            </FormControl>
          </div>

          {/* Añadir hora */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-sm md:text-lg lg:text-xl mt-2">
              {" "}
              Hora de inicio:{" "}
            </h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Hora de inicio"
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
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
                minTime={dayjs().set("hour", 7).startOf("hour")}
                maxTime={maxH}
                placeholder="Hora de inicio"
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
                label="Hora de finalización"
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
                  }
                }}
                renderInput={(params) => <TextField {...params} />}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
                minTime={minH}
                maxTime={dayjs().set("hour", 19).startOf("hour")}
                placeholder="Hora de finalización"
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

      <div className="mt-20 ml-10 mr-7">
        <Toaster
          message="Horario de clases actualizado"
          isVisible={toasterVisible}
        />
      </div>
    </div>
  );
};
