import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../Spinner/spinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [editableFields, setEditableFields] = useState({
    className,
    professor,
    trimester,
    day,
    start,
    end,
  });

  const handleChange = (name, value) => {
    setEditableFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSave = () => {
    setLoading(true);
    setIsEditing(false);
    setEditIndex(index);
    setEditData(editableFields);
    setLoading(false);
  };

  const handleCancel = () => {
    setEditableFields({
      className,
      professor,
      trimester,
      day,
      start,
      end,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    setDeleteIndex(index);
  };

  if (isLoading)
    return (
      // <div
      //   style={{
      //     position: "fixed",
      //     top: 195,
      //     left: 0,
      //     width: "100%",
      //     height: "90%",
      //     zIndex: 1000,
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     background: "white",
      //   }}
      //   >
      // </div>
      <Spinner />
    );

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
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.trimester}
            onChange={(e) => handleChange("trimester", e.target.value)}
          />
        ) : (
          <p> {trimester} </p>
        )}
      </div>

      {/* Dia*/}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg "> Día de las clases: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.day}
            onChange={(e) => handleChange("day", e.target.value)}
          />
        ) : (
          <p> {day} </p>
        )}
      </div>

      {/* Hora de Inicio*/}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Hora de Inicio: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.start}
            onChange={(e) => handleChange("start", e.target.value)}
          />
        ) : (
          <p> {start} </p>
        )}
      </div>

      {/* Hora de finalización*/}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Hora de Finalización: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.end}
            onChange={(e) => handleChange("end", e.target.value)}
          />
        ) : (
          <p> {end} </p>
        )}
      </div>
    </div>
  );
};

export default ClassesCard;
