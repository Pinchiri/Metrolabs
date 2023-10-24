"use client";

import React from "react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import AccordionList from "../Accordion/AccordionList";
import InitialDialog from "./InitialDialog";
import scientistAsset from "../../assets/scientist-asset.png";

dayjs.locale("es");

const DateFormat = ({ selectedDate, jsonDates }) => {
  const [dateInfo, setDateInfo] = useState({});

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleDates = (jsonDates, selectedDate) => {
    const selectedMonth = capitalizeWords(dayjs(selectedDate).format("MMMM"));
    const dayInt = parseInt(dayjs(selectedDate).format("DD"));

    if (jsonDates && selectedDate) {
      const monthData = jsonDates.filter((month) => month[selectedMonth]);

      const dayData = monthData[0][selectedMonth][dayInt];
      if (dayData) {
        return dayData;
      } else {
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    setDateInfo(handleDates(jsonDates, selectedDate));
  }, [jsonDates, selectedDate]);

  useEffect(() => {
    // console.log("dateInfo:", dateInfo);
  }, [dateInfo]);

  return (
    <div className="flex justify-center items-center">
      {selectedDate ? (
        //Si dateinfo no es null
        dateInfo ? (
          <div className="flex flex-col items-center">
            <h2
              className="text-stratos tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 mb-3 font-bold "
              style={{ fontSize: "45px" }}
            >
              {capitalizeWords(dayjs(selectedDate).format("dddd DD MMMM YYYY"))}
            </h2>
            <AccordionList data={dateInfo} />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2
              className="text-stratos tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 mb-3 font-bold "
              style={{ fontSize: "45px" }}
            >
              {capitalizeWords(dayjs(selectedDate).format("dddd DD MMMM YYYY"))}
            </h2>
            <h2
              className="text-black tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 mb-3 font-bold "
              style={{ fontSize: "20px" }}
            >
              No hay horarios disponibles
            </h2>

            <img
              src={scientistAsset.src}
              alt="Scientist Asset"
              className="h-1/2 sm:h-1/3 lg:h-[350px] w-1/2 lg:w-[170px]  sm:w-1/3 mt-10 sm:ml-10 relative z-10 animate-fade-right"
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
