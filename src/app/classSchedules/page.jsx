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

  return (
    <div className="flex h-auto px-10 mt-4 justify-center items-center flex-col md:flex-row md:items-center md:space-y-6 md:space-x-4">
      <div className="flex-1 max-w-screen-sm p-3 mr-5 animate-fade-right">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex justify-center mt-2 mx-auto">
            <Schedule
              onAccept={setSelectedDate}
              value={selectedDate}
            />
          </div>
        </div>
      </div>

      <div className="flex-2 p-5 animate-fade-right justify-center items-center mx-auto">
        <DateFormat
          selectedDate={selectedDate}
          jsonDates={labDates}
        />
      </div>
    </div>
  );
}
