"use client";

import GuideCard from "@/components/guideCard/guideCard";
import { useState, useEffect } from 'react';
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

    console.log(manuals);

    return(
        <>
        <div className="h-screen">
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
    )
}

export default Manuals;
