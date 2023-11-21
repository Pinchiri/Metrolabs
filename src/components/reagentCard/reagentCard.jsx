import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../Spinner/spinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ReagentCard = ({
  index,
  reactive,
  formule,
  cas,
  brand,
  concentration,
  quantity,
  units,
  risk,
  ubication,
  observations,
  setEditIndex,
  setEditData,
  setDeleteIndex,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [editableFields, setEditableFields] = useState({
    reactive,
    formule,
    cas,
    brand,
    concentration,
    quantity,
    units,
    risk,
    ubication,
    observations,
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
      reactive,
      formule,
      cas,
      brand,
      concentration,
      quantity,
      units,
      risk,
      ubication,
      observations,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    setDeleteIndex(index);
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

      {/* Reactivo */}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Reactivo: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.reactive}
            onChange={(e) => handleChange("reactive", e.target.value)}
          />
        ) : (
          <p> {reactive} </p>
        )}
      </div>

      {/* Fórmula */}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Fórmula: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.formule}
            onChange={(e) => handleChange("formule", e.target.value)}
          />
        ) : (
          <p> {formule} </p>
        )}
      </div>

      {/* Número CAS */}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg "> No CAS: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.cas}
            onChange={(e) => handleChange("cas", e.target.value)}
          />
        ) : (
          <p> {cas} </p>
        )}
      </div>

      {/* Marca */}
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

      {/* Concentración */}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Pur/Con%: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.concentration}
            onChange={(e) => handleChange("concentration", e.target.value)}
          />
        ) : (
          <p> {concentration} </p>
        )}
      </div>

      {/* Cantidad */}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Cantidad: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="number"
            value={editableFields.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
          />
        ) : (
          <p> {quantity} </p>
        )}
      </div>

      {/* Unidades */}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Unidad: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.units}
            onChange={(e) => handleChange("units", e.target.value)}
          />
        ) : (
          <p> {units} </p>
        )}
      </div>

      {/* Riesgo */}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Riesgo: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.risk}
            onChange={(e) => handleChange("risk", e.target.value)}
          />
        ) : (
          <p> {risk} </p>
        )}
      </div>

      {/* Ubicación */}
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

      {/* Observaciones */}
      <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Observaciones: </h3>
        {isEditing ? (
          <textarea
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            value={editableFields.observations}
            onChange={(e) => handleChange("observations", e.target.value)}
          />
        ) : (
          <p> {observations} </p>
        )}
      </div>
    </div>
  );
};

export default ReagentCard;
