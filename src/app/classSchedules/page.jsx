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

  // useEffect(() => {
  //   console.log(value);
  //   console.log("labDates:", labDates);

  // }, [value, labDates]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen px-4 md:px-10 mt-[30px] md:mt-0">
      <div className="flex flex-col w-full p-3 animate-fade-right">
        <Schedule
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>

      <div className="flex flex-col w-full items-center p-3 animate-fade-right">
        <DateFormat
          selectedDate={value}
          jsonDates={labDates}
        />
      </div>
    </div>
  );
}
