import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Toaster = ({ message = "Inventario actualizado" }) => {
  const [show, setShow] = useState(true);  // Estado local para controlar la visibilidad

  if (!show) return null;

  const handleClose = () => {
    setShow(false);  // Función para cambiar el estado y ocultar el Toaster
  };

  return (
    <div
      className={`fixed top-64 mt-10 right-15 bg-[#FFB635] p-4 pr-12 z-50rounded shadow-md transition-opacity duration-300 ease-in-out`}
      style={{
        top: '50px',
        right: '10px',
      }}
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 mt-2 mr-2"
        aria-label="Cerrar"
      >
        <CloseIcon />
      </button>
      <p className="text-lg font-bold">{message}</p>
    </div>
  );
};

export default Toaster;
