"use client";

import "../globals.css";
import React, { useState, useEffect } from "react";
import Schedule from "../../components/Schedule/Schedule";
import DateFormat from "../../components/Schedule/DateFormat";
import Spinner from "@/components/Spinner/spinner";

export default function ClassSchedules() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/sheetsClasses");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const dataWithIndex = data.map((item, index) => ({
        ...item,
        originalIndex: index,
      }));

      setData(dataWithIndex);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <>
        {" "}
        <h1 className="font-['B612'] ml-10 mt-20 font-bold pt-5 text-3xl">
          {" "}
          Horarios del laboratorio{" "}
        </h1>{" "}
        <Spinner />{" "}
      </>
    );

  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

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
            data={data}
          />
        </div>
      </div>
    </div>
  );
}
