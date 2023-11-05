import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Toaster = ({ message = "Inventario actualizado", isVisible }) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setShow(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div
      className={`fixed top-64 mt-10 mr-16 bg-[#FFB635] p-4 pr-12 rounded shadow-md transition-opacity duration-300 ease-in-out z-50 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{
        top: "50px",
        right: "20px",
        transition: "opacity 0.5s ease-in-out",
      }}
      onAnimationEnd={() => {
        if (!show) {
        }
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
