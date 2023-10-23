"use client";

import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { esES } from "@mui/x-date-pickers/locales";

const Schedule = ({ onAccept, value }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        esES.components.MuiLocalizationProvider.defaultProps.localeText
      }
      adapterLocale={"es"}
    >
      <StaticDatePicker
        className="text-black"
        sx={{
          backgroundColor: "#f1f574",
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
        slotProps={{
          actionBar: {
            actions: ["accept", "cancel"],
          },
        }}
        orientation="portrait"
        openTo="day"
        value={value}
        onAccept={onAccept}
        renderInput={(params) => <input {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Schedule;
