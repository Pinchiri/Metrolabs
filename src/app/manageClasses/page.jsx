"use client";

import "../globals.css";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner/spinner";
import Toaster from "@/components/toast/toaster";
import PrivateRoute from "@/privateRoute/privateRoute";

export default function ManageClasses() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [toasterVisible, setToasterVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (editIndex !== null && editData !== null) {
      updateData(editIndex, editData);
    }
  }, [editIndex, editData]);

  const fetchData = async () => {
    setToasterVisible(false);
    setLoading(true);
    try {
      const response = await fetch("/api/sheetsReagent");
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

  return (
    <>
      <PrivateRoute>
        <div className="mt-12 ml-10 mr-7">
          <h1 className="font-['B612'] font-bold pt-2 text-3xl">
            Horarios de Clases
          </h1>
        </div>
      </PrivateRoute>
    </>
  );
}
