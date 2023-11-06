"use client";

import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import { esES } from "@mui/x-date-pickers/locales";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const Schedule = ({ value, onChange }) => {
  const minDate = dayjs().startOf("year"); // Primer día del año actual
  const maxDate = dayjs().endOf("year"); // Último día del año actual

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        esES.components.MuiLocalizationProvider.defaultProps.localeText
      }
      adapterLocale={"es"}
    >
      <DateCalendar
        className="text-black bg-primary"
        value={value}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        views={["day"]}
        openTo="day"
        sx={{
          "@media (min-width: 900px)": {
            fontSize: "1.2rem",
            width: "auto",
            transform: "scale(1.2)",
          },
          borderRadius: "2rem",
          p: 1,
          "& .MuiButtonBase-root.Mui-selected": {
            backgroundColor: "#000",
          },
          "& .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected ":
            {
              backgroundColor: "#000",
            },
          "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
            color: "#000000",
          },
          "& .css-jgls56-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
            {
              border: "1.5px solid #1E1E1E",
            },
        }}
      />
    </LocalizationProvider>
  );
};

export default Schedule;
