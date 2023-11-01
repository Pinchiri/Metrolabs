"use client";


import React, { useState, useEffect } from 'react';
import ReagentCard from '@/components/reagentCard/reagentCard';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear'; 


const SheetComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


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

  const filteredData = data.filter(item =>
    item.reactive.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="mt-20 ml-10 mr-7">
      <h1 className="font-['B612'] font-bold pt-5 text-3xl">
        Inventario de Reactivos
      </h1>

      <div >
        <SearchIcon/>
        <input
          className='w-11/12 mt-5 bg-[#FFF8E4] p-3 rounded-xl ml-2'
          type="text"
          placeholder='Buscar un reactivo....'
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {searchTerm && (
          <button onClick={clearSearch} className='ml-2'>
            <ClearIcon style={{marginLeft: '-70px'}} /> 
          </button>
        )}

      </div>
      
      <p className="mt-5 font-['B612'] font-bold text-xl pb-2"> 
        Lista de Reactivos 
      </p>

      <div className='bg-manz-200 p-5 rounded-lg lg:mr-12'>
        {filteredData.map((item, index) => (
        <ReagentCard 
            key={index} 
            reactive= {item.reactive} 
            formule = {item.formule}
            cas = {item.cas}
            brand= {item.brand}
            concentration= {item.concentration}
            quantity= {item.quantity}
            units= {item.units}
            risk= {item.risk}
            ubication= {item.ubication}
            observations= {item.observations}
        />

      ))}
      </div>
    </div>
  );
};

export default SheetComponent;

 