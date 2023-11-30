"use client"
import React, { useState, useEffect } from 'react';
import TeacherCard from "@/components/teachersCard/teachersCard";
import { fetchInformation } from "./FirebaseFetch";
import Spinner from '@/components/Spinner/spinner';

const LabTeachersInformation = () => {
  const [teachersInformation, setTeachersInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfessors = async () => {
      setIsLoading(true); 
      const professorsData = await fetchInformation("professors");
      setTeachersInformation(professorsData);
      setIsLoading(false); 
    };
    loadProfessors();
  }, []); 

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
      <p
        className="pl-10 pb-3 mt-10 flex justify-center mb-4 text-stratos px-4 text-3xl sm:text-3xl self-left tracking-tighter font-b612 font-bold"
        id="LabTeachersInformation"
      >
        Nuestros Profesores
      </p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {teachersInformation.map((teacher, index) => (
          <TeacherCard
            key={index}
            name={teacher.name}
            imageURL={teacher.imgURL}
            education={teacher.education}
            email={teacher.email}
            interestAreas={teacher.interestAreas}
            asignatures={teacher.asignatures}
            publications={teacher.publications}
          />
        ))}
      </div>
    </>
  );
};

export default LabTeachersInformation;
