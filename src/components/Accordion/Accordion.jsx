import React, { useState, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const Accordion = (props) => {
  const [item, setItem] = useState(props.data);
  const [subtitle, setSubtitle] = useState("");

  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  // Función que calcula los espacios disponibles
  const calculateSpaces = (item) => {
    const spaces =
      parseInt(item["Espacio Total"]) - parseInt(item["Espacio Reservados"]);
    if (spaces > 1) {
      return `${spaces} cupos disponibles`;
    } else if (spaces === 1) {
      return `${spaces} cupo disponible`;
    } else {
      return "Agotado";
    }
  };

  // Actualiza el subtítulo cuando props.title cambia
  useEffect(() => {
    setSubtitle(calculateSpaces(item));
  }, [props.title]);

  return (
    <div
      className={`bg-manz-200 p-5 pb-1 border border-[#c9c6c655] rounded-md
         ${item.active === 1 ? "is-active bg-white" : ""}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-start">
          <div className="w-auto mt-2 mr-2">
            <WatchLaterIcon className="text-3xl" />
          </div>
          <div className="flex flex-col items-start">
            <div className={`w-full ${item.active === 1 ? "font-bold" : ""}`}>
              {props.title}
            </div>
            <div className="w-full">{subtitle}</div>
          </div>
          <div className="w-auto ml-auto mt-2">
            {parseInt(item["Espacio Reservados"]) === 10 ? (
              <EventBusyIcon className="text-3xl" />
            ) : (
              <EventAvailableIcon className="text-3xl" />
            )}
          </div>
        </div>
        <div
          className={`text-xl cursor-pointer flex items-center justify-center`}
          onClick={handleToggleActive}
        >
          <KeyboardArrowRightIcon
            className={`${item.active === 1 ? "rotate-[270deg]" : "rotate-90"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden max-h-0 duration-500 ${
          item.active === 1 ? "max-h-[100px]" : ""
        }`}
      >
        <div className="text-sm mb-2">
          <div className="flex">
            <p className="font-bold mr-2">Cupos totales:</p>
            <p>{parseInt(item["Espacio Total"])}</p>
          </div>

          <div className="flex">
            <p className="font-bold mr-2"> Cupos reservados: </p>
            <p>{parseInt(item["Espacio Reservados"])}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
