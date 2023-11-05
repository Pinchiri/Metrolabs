"use client";

import "../globals.css";
import React, { useState, useEffect } from "react";
import Schedule from "../../components/Schedule/Schedule";
import DateFormat from "../../components/Schedule/DateFormat";
import { handleCalendarFetch } from "./handleCalendarFetch";

export default function ClassSchedules() {
  const [value, setValue] = useState(null);
  const [labDates, setLabDates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleCalendarFetch();
        setLabDates(data);
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 md:px-10 mt-10 md:mt-[-20px]">
      <div className="w-full self-start z-10 md:mb-[20px]">
        <h1
          className="text-3xl md:text-5xl font-bold text-left"
          style={{ fontSize: "35px" }}
        >
          Horarios del laboratorio
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch w-full">
        <div className="flex flex-col w-full justify-center animate-fade-right h-[450px]">
          <Schedule
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </div>

        <div className="flex flex-col w-full items-center p-3 animate-fade-right h-[450px]">
          <DateFormat
            selectedDate={value}
            jsonDates={labDates}
          />
        </div>
      </div>
    </div>
  );
}
