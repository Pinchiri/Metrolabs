"use client";

import GuideCard from "@/components/guideCard/guideCard";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";

const Manuals = () => {
  const [manuals, setManuals] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const manualsCollection = collection(db, "manuals");
        const manualsSnapshot = await getDocs(manualsCollection);
        const manualsData = manualsSnapshot.docs.map((doc) => doc.data());
        setManuals(manualsData);
      } catch (error) {
        console.log("Error fetching categories: ", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div className="h-screen pl-10 pt-28 text-2xl font-bold	">
        <h1 className="font-['B612'] pt-5 pb-10 text-3xl">
          Manuales de Laboratorio
        </h1>

        {manuals.map((manual, index) => (
          <GuideCard
            key={index}
            title={manual.title || "Átomos y Elementos"}
            subtitle={manual.subtitle || "Subhead"}
            pdfUrl={manual.url}
          />
        ))}
      </div>
    </>
  );
};

export default Manuals;
