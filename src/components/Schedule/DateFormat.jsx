"use client";

import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import AccordionList from "../Accordion/AccordionList";
import guyAsset from "../../assets/guy-asset.png";

dayjs.locale("es");

const DateFormat = ({ selectedDate, list }) => {
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex justify-center items-center">
      {selectedDate ? (
        <div className="flex flex-col items-center">
          <h2
            className="text-stratos tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 mb-3 font-bold "
            style={{ fontSize: "45px" }}
          >
            {capitalizeWords(dayjs(selectedDate).format("dddd DD MMMM YYYY"))}
          </h2>
          <AccordionList list={list} />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2
            className="text-stratos tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 font-bold"
            style={{ fontSize: "45px", whiteSpace: "nowrap" }}
          >
            Seleccione una fecha
          </h2>
          <img
            src={guyAsset.src}
            alt="Guy Asset"
            className="h-1/2 sm:h-1/3 lg:h-[350px] w-1/2 sm:w-1/3 lg:w-[170px] relative z-10 animate-fade-left mr-4 mt-4"
          />
        </div>
      )}
    </div>
  );
};

export default DateFormat;
