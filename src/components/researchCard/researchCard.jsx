import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../Spinner/spinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ResearchCard = ({
  index,
  students,
  tesis,
  startDate,
  endDate,
  observations,
  setEditIndex,
  setEditData,
  setDeleteIndex,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [editableFields, setEditableFields] = useState({
    students,
    tesis,
    startDate,
    endDate,
    observations,
  });

  const handleChange = (name, value) => {
    setEditableFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    setEditIndex(index);
    setEditData(editableFields);
  };

  const handleDelete = () => {
    setDeleteIndex(index);
  };

  const handleCancel = () => {
    setEditableFields({
      students,
      tesis,
      startDate,
      endDate,
    });
    setIsEditing(false);
  };

  if (isLoading)
    return (
      <div
        style={{
          position: "fixed",
          top: 195,
          left: 0,
          width: "100%",
          height: "90%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
        }}
      >
        <Spinner />
      </div>
    );

  return (
    <>
      <div className="bg-white rounded-lg mt-1 mb-3 p-3 border">
        {/* Selector de opción para ejecutar */}
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

        {/* INFORMACIÓN  PARA VER  O EDITAR */}
        {/* Mostrar Estudiantes*/}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Estudiantes: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.students}
              onChange={(e) => handleChange("students", e.target.value)}
            />
          ) : (
            <p> {students} </p>
          )}
        </div>

        {/* Mostrar Tesis */}
        <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Tesis: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.tesis}
              onChange={(e) => handleChange("tesis", e.target.value)}
            />
          ) : (
            <p> {tesis} </p>
          )}
        </div>

        {/* Mostrar fecha inicio*/}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Fecha Inicio: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
          ) : (
            <p> {startDate} </p>
          )}
        </div>

        {/* Mostrar fecha fin*/}
        <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Fecha Fin: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
            />
          ) : (
            <p> {endDate} </p>
          )}
        </div>

        {/* Mostrar observaciones*/}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Observaciones: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.observations}
              onChange={(e) => handleChange("observations", e.target.value)}
            />
          ) : (
            <p> {observations} </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ResearchCard;
