"use client";

import "../globals.css";
import React, { useState, useEffect } from "react";
import Schedule from "../../components/Schedule/Schedule";
import DateFormat from "../../components/Schedule/DateFormat";
import { handleCalendarFetch } from "./handleCalendarFetch";

export default function ClassSchedules() {
  const [selectedDate, setSelectedDate] = useState("");
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
  //   console.log("labDates:", labDates);
  // }, [labDates]);

  return (
    <div className="flex min-h-screen px-10 pt-4 overflow-x-clip justify-around">
      <div className="flex-1 max-w-screen-sm p-3 mr-5 animate-fade-right">
        <div className="flex justify-center items-center mx-auto">
          <h2
            className="text-stratos tracking-tighter text-xs sm:text-5xl lg:self-center font-b612 font-bold"
            style={{ fontSize: "45px" }}
          >
            Horarios disponibles
          </h2>
        </div>
        <div className="flex justify-center mt-2 mx-auto">
          <Schedule
            onAccept={setSelectedDate}
            value={selectedDate}
          />
        </div>
      </div>

      <div className="flex-2 p-5 animate-fade-right">
        <div className="flex justify-center items-center mx-auto">
          <DateFormat
            selectedDate={selectedDate}
            jsonDates={labDates}
          />
        </div>
      </div>
    </div>
  );
}
