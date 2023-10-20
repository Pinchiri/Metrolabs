"use client";

import GuideCard from "@/components/guideCard/guideCard";
import { useState, useEffect } from 'react';


const Guides = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
      const fetchFiles = async () => {
        try {
          const response = await fetch('/api/page');
          const data = await response.json();

          console.log(data)

          setFiles(data);
        } catch (error) {
          console.error("Error fetching the files:", error);
        }
      };
  
      fetchFiles();
    }, []);  

    return(
        <>
        <div className="h-screen">
           <GuideCard title = "Átomos y Elementos" subtitle={"Subhead"}/>
           <GuideCard title = "Átomos y Elementos" subtitle={"Subhead"}/>

           <GuideCard title = "Átomos y Elementos" subtitle={"Subhead"}/>

           <GuideCard title = "Átomos y Elementos" subtitle={"Subhead"}/>

           <GuideCard title = "Átomos y Elementos" subtitle={"Subhead"}/>

           <GuideCard title = "Átomos y Elementos" subtitle={"Subhead"}/>

           <GuideCard title = "Átomos y Elementos" subtitle={"Subhead"}/>


        </div>
        </>
    )
}

export default Guides;
