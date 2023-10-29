"use client";


import React, { useState, useEffect } from 'react';

const SheetComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/sheets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Fallo al cargar los datos: {error.message}</div>;

  return (
    <div>
      <h1>Datos de la Hoja</h1>
      {data && data.map((item, index) => (
        <p key={index}>{item.columna1} - {item.columna2}</p> 
      ))}
    </div>
  );
};

export default SheetComponent;