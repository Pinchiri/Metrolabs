"use client";

import "../globals.css";
import React, { useState } from "react";
import Schedule from "../../components/Schedule/Schedule";
import DateFormat from "../../components/Schedule/DateFormat";

export default function ClassSchedules() {
  const [selectedDate, setSelectedDate] = useState("");

  React.useEffect(() => {
    console.log(selectedDate.$d);
  }, [selectedDate]);

  const [list, setList] = useState([
    {
      title: "7:00am - 8:30am",
      subtitle: "3 cupos disponibles",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      title: "8:30am - 10:00am",
      subtitle: "Agotado",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
  ]);

  return (
    <div className="flex min-h-screen px-10 pt-4 justify-center mt-28 overflow-x-clip">
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

      <div className="flex-2 p-5 max-w-[400px] animate-fade-right">
        <div className="flex justify-center items-center">
          <DateFormat
            selectedDate={selectedDate}
            list={list}
          />
        </div>
      </div>
    </div>
  );
}
