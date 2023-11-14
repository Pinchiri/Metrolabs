import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../Spinner/spinner";

const EquipmentCard = ({
  index,
  equipment,
  brand,
  model,
  quantity,
  ubication,
  userManual,
  frecuency,
  date,
  observations,
  setEditIndex,
  setEditData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [editableFields, setEditableFields] = useState({
    equipment,
    brand,
    model,
    quantity,
    ubication,
    userManual,
    frecuency,
    date,
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

  const handleCancel = () => {
    setEditableFields({
      equipment,
      brand,
      model,
      quantity,
      ubication,
      userManual,
      frecuency,
      date,
      observations,
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
      <div className="bg-white rounded-lg mt-1 mb-3 p-3">
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
            <div
              onClick={() => setIsEditing(true)}
              className="cursor-pointer flex flex-col items-center"
            >
              <EditIcon />
              <p>Editar</p>
            </div>
          )}
        </div>

        {/* INFORMACIÓN  PARA VER  O EDITAR */}
        {/* Mostrar equipo */}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Equipo: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.equipment}
              onChange={(e) => handleChange("equipment", e.target.value)}
            />
          ) : (
            <p> {equipment} </p>
          )}
        </div>

        {/* Mostrar marca */}
        <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Marca: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.brand}
              onChange={(e) => handleChange("brand", e.target.value)}
            />
          ) : (
            <p> {brand} </p>
          )}
        </div>

        {/* Mostrar modelo */}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Modelo: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.model}
              onChange={(e) => handleChange("model", e.target.value)}
            />
          ) : (
            <p> {model} </p>
          )}
        </div>

        {/* Mostrar cantidad */}
        <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Cantidad: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.quantity}
              onChange={(e) => handleChange("quantity", e.target.value)}
            />
          ) : (
            <p> {quantity} </p>
          )}
        </div>

        {/* Mostrar ubicación */}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Ubicación: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.ubication}
              onChange={(e) => handleChange("ubication", e.target.value)}
            />
          ) : (
            <p> {ubication} </p>
          )}
        </div>

        {/* Mostrar Manual de usuario */}
        <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Manual: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.userManual}
              onChange={(e) => handleChange("userManual", e.target.value)}
            />
          ) : (
            <p> {userManual} </p>
          )}
        </div>

        {/* Mostrar frecuencia de mantenimiento */}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Frecuencia Mantenimiento: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.frecuency}
              onChange={(e) => handleChange("frecuency", e.target.value)}
            />
          ) : (
            <p> {frecuency} </p>
          )}
        </div>

        {/* Mostrar fecha último mantenimiento */}
        <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Fecha último Mantenimiento: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          ) : (
            <p> {date} </p>
          )}
        </div>

        {/* Mostrar observaciones */}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Comentarios: </h3>
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

export default EquipmentCard;
