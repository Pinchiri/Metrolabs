"use client";
import React, { useState, useEffect } from 'react';
import Guiderule from "../../assets/Normativas.PNG";
import { fetchInformation } from './FirebaseFetch';
import Spinner from '@/components/Spinner/spinner';

const LabGuideRules = () => {
  const [normativesInformation, setNormativesInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNormatives = async () => {
      setIsLoading(true); 
      const normativesData = await fetchInformation("normatives");
      setNormativesInformation(normativesData);
      setIsLoading(false);
    };
    loadNormatives();
  }, []); 

  if (isLoading) {
    return <Spinner />; 
  }

  return (
    <div className="w-full flex flex-col mt-2 mb-10" id="LabGuideRules">
      <p className="pl-10 pb-10 text-stratos flex justify-center px-4 text-3xl sm:text-3xl self-left tracking-tighter font-b612 font-bold">
        Normativas del Laboratorio
      </p>
      <img
        src={Guiderule.src}
        alt="Normativas"
        className="drop-shadow-lg pl-10 self-left lg-px-36 rounded-lg h-[150px] w-[auto] mr-10 lg:h-[350px] lg:mx-40"
      />
      <div className="w-[max] pt-5 pl-11 pr-10 animate-fade-right">
        <ul className="list-disc pl-10">
          {normativesInformation.map((normative, index) => (
            normative.name ? <li key={index} className="pb-4">{normative.name}</li> : null
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LabGuideRules;
