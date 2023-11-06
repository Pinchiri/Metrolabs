import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../Spinner/spinner";

const MaterialCard = ({
  index,
  material,
  capacity,
  brand,
  quantity,
  ubication,
  observations,
  setEditIndex,
  setEditData,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [editableFields, setEditableFields] = useState({
    material,
    capacity,
    brand,
    quantity,
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
  };

  const handleCancel = () => {
    setEditableFields({
      material,
      capacity,
      brand,
      quantity,
      ubication,
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

        {/* Mostrar material*/}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Material: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.material}
              onChange={(e) => handleChange("material", e.target.value)}
            />
          ) : (
            <p> {material} </p>
          )}
        </div>

        {/* Mostrar capacidad */}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
          <h3 className="font-bold text-lg"> Capacidad: </h3>
          {isEditing ? (
            <input
              className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
              type="text"
              value={editableFields.capacity}
              onChange={(e) => handleChange("capacity", e.target.value)}
            />
          ) : (
            <p> {capacity} </p>
          )}
        </div>

        {/* Mostrar marca */}
        <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
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

        {/* Mostrar comentarios */}
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

      {/* Mostrar material*/}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Material: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.material}
            onChange={(e) => handleChange("material", e.target.value)}
          />
        ) : (
          <p> {material} </p>
        )}
      </div>

      {/* Mostrar capacidad */}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
        <h3 className="font-bold text-lg"> Capacidad: </h3>
        {isEditing ? (
          <input
            className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
            type="text"
            value={editableFields.capacity}
            onChange={(e) => handleChange("capacity", e.target.value)}
          />
        ) : (
          <p> {capacity} </p>
        )}
      </div>

      {/* Mostrar marca */}
      <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
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

      {/* Mostrar comentarios */}
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
    </>
  );
};

export default MaterialCard;
