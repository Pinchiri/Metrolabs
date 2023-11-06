"use client";

import React from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import InitialDialog from "./InitialDialog";
import scientistAsset from "../../assets/scientist-asset.png";
import ListAccordion from "../Accordion/ListAccordion";

dayjs.locale("es");

const DateFormat = ({ selectedDate, data }) => {
  const [infoClasses, setInfoClasses] = useState([]);

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleDataClasses = (selectedDate, data) => {
    const month = dayjs(selectedDate).format("MMMM").toLowerCase();
    const day = dayjs(selectedDate).format("dddd").toLowerCase();
    const trimester = {
      "Enero-Marzo": ["enero", "febrero", "marzo"],
      "Abril-Junio": ["abril", "mayo", "junio"],
      "Septiembre-Noviembre": ["septiembre", "octubre", "noviembre"],
    };

    return data.filter((item) => {
      const monthRange = trimester[item.trimester];
      if (!monthRange || !item.day) return false;

      return monthRange.includes(month) && item.day.toLowerCase().includes(day);
    });
  };

  const formatDataClasses = (data) => {
    if (data.length === 0) return [];

    return data.map((item) => {
      return {
        title: item.start + "-" + item.end,
        content: {
          Clase: item.className,
          Profesor: item.professor,
        },
      };
    });
  };

  useEffect(() => {
    setInfoClasses(formatDataClasses(handleDataClasses(selectedDate, data)));
  }, [selectedDate, data]);

  useEffect(() => {
    console.log(infoClasses);
  }, [infoClasses]);

  return (
    <div className="flex justify-center items-center">
      {selectedDate ? (
        infoClasses.length > 0 ? (
          <div className="flex flex-col items-center h-auto">
            <p
              className="px-4 tracking-tighter text-xl sm:text-3xl lg:self-center font-b612 font-bold mb-5"
              style={{ fontSize: "35px" }}
            >
              {capitalizeWords(dayjs(selectedDate).format("dddd DD MMMM YYYY"))}
            </p>

            <ListAccordion dateInfo={infoClasses} />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2
              className="tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 mb-3 font-bold "
              style={{ fontSize: "35px" }}
            >
              {capitalizeWords(dayjs(selectedDate).format("dddd DD MMMM YYYY"))}
            </h2>

            <h2
              className="tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 mb-3 font-bold "
              style={{ fontSize: "20px" }}
            >
              No hay horarios disponibles
            </h2>

            <img
              src={scientistAsset.src}
              alt="Scientist Asset"
              className="h-1/2 sm:h-1/3 lg:h-[350px] w-1/2 lg:w-[170px] sm:w-1/3 mt-5 sm:mt-0 sm:ml-10 relative z-10 animate-fade-right "
            />
          </div>
        )
      ) : (
        <InitialDialog />
      )}
    </div>
  );
};

export default DateFormat;
