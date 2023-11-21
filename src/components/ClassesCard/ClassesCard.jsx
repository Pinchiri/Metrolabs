import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../Spinner/spinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";

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

const ClassesCard = ({
  index,
  className,
  professor,
  trimester,
  day,
  start,
  end,
  setEditIndex,
  setEditData,
  setDeleteIndex,
  setToasterProperties,
  showToast,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [minH, setMinH] = useState(
    dayjs().set("hour", 7).startOf("hour").set("minute", 5)
  );
  const [maxH, setMaxH] = useState(dayjs().set("hour", 19).startOf("hour"));

  const [editableFields, setEditableFields] = useState({
    className: className,
    professor: professor,
    trimester: trimester,
    day: day,
    start: start,
    end: end,
  });

  const handleChange = (name, value) => {
    setEditableFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSave = () => {
    setLoading(true);
    setIsEditing(false);

    for (const [key, value] of Object.entries(editableFields)) {
      if (value === "") {
        setToasterProperties({
          toasterMessage: "No puede haber campos vacíos!",
          typeColor: "error",
        });
        showToast();
        setLoading(false);
        return;
      }
    }

    editableFields.start = dayjs(editableFields.start, "HH:mm").format(
      "h:mm A"
    );
    editableFields.end = dayjs(editableFields.end, "HH:mm").format("h:mm A");
    setEditIndex(index);
    setEditData(editableFields);
    setEditableFields({
      className: className,
      professor: professor,
      trimester: trimester,
      day: day,
      start: start,
      end: end,
    });
    setLoading(false);
  };

  const handleCancel = () => {
    setEditableFields({
      className: className,
      professor: professor,
      trimester: trimester,
      day: day,
      start: start,
      end: end,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    setDeleteIndex(index);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-white rounded-lg mt-1 mb-3 p-3">
      <div className="flex justify-end p-3 gap-2">
        {isEditing ? (
          <>
            <div
              onClick={handleCancel}
              className="cursor-pointer flex flex-col items-center"
            >
              <CancelIcon />
              <p>Cancelar</p>
            </div>
            <div
              onClick={handleSave}
              className="cursor-pointer flex flex-col items-center"
            >
              <SaveIcon />
              <p>Guardar</p>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => setIsEditing(true)}
              className="cursor-pointer flex flex-col items-center"
            >
              <EditIcon />
              <p>Editar</p>
            </div>

            <div
              onClick={handleDelete}
              className="ml-4 cursor-pointer flex flex-col items-center"
            >
              <DeleteForeverIcon />
              <p>Eliminar</p>
            </div>
          </>
        )}
      </div>

      {/* Nombre de la clase */}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Clase: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.className}
            onChange={(e) => handleChange("className", e.target.value)}
          />
        ) : (
          <p> {className} </p>
        )}
      </div>

      {/* Profesor */}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Profesor: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.professor}
            onChange={(e) => handleChange("professor", e.target.value)}
          />
        ) : (
          <p> {professor} </p>
        )}
      </div>

      {/* Trimestre*/}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg "> Trimestre: </h3>
        {isEditing ? (
          <FormControl className="rounded-lg p-2 hover:border-2 hover:border-amber-300">
            <InputLabel id="trimester-label">Trimestre</InputLabel>
            <Select
              label="Trimestre"
              id="trimester"
              name="trimester"
              value={editableFields.trimester}
              onChange={(e) => handleChange("trimester", e.target.value)}
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
        ) : (
          <p> {trimester} </p>
        )}
      </div>

      {/* Dia*/}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg "> Día de las clases: </h3>
        {isEditing ? (
          <FormControl className="rounded-lg p-2 hover:border-2 hover:border-amber-300">
            <InputLabel id="day-label">Día</InputLabel>
            <Select
              label="Día"
              id="day"
              name="day"
              value={editableFields.day}
              onChange={(e) => handleChange("day", e.target.value)}
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
        ) : (
          <p> {day} </p>
        )}
      </div>

      {/* Hora de Inicio*/}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Hora de Inicio: </h3>
        {isEditing ? (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Hora de inicio"
              value={dayjs(editableFields.start, "HH:mm")}
              onChange={(newValue) => {
                const newStartValue = dayjs(newValue);
                if (newStartValue.isValid() && newStartValue.isBefore(maxH)) {
                  setEditableFields((prevEditableFields) => ({
                    ...prevEditableFields,
                    start: newStartValue.format("HH:mm"),
                  }));
                  // Update minH to be 5 minutes after the start time
                  setMinH(newStartValue.add(5, "minute"));
                } else {
                  setEditableFields((prevEditableFields) => ({
                    ...prevEditableFields,
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
        ) : (
          <p> {start} </p>
        )}
      </div>

      {/* Hora de finalización*/}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Hora de Finalización: </h3>
        {isEditing ? (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Hora de finalización"
              value={dayjs(editableFields.end, "HH:mm")}
              onChange={(newValue) => {
                const newEndValue = dayjs(newValue);
                if (newEndValue.isValid() && newEndValue.isAfter(minH)) {
                  setEditableFields((prevEditableFields) => ({
                    ...prevEditableFields,
                    end: newEndValue.format("HH:mm"),
                  }));
                  // Update maxH to be 5 minutes before the end time
                  setMaxH(newEndValue.subtract(5, "minute"));
                } else {
                  setEditableFields((prevEditableFields) => ({
                    ...prevEditableFields,
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
        ) : (
          <p> {end} </p>
        )}
      </div>
    </div>
  );
};

export default ClassesCard;
