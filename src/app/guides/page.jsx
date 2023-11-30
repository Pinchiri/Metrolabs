"use client";

import React, { useState, useEffect } from "react";
import GuideCard from "@/components/guideCard/guideCard";
import Spinner from "@/components/Spinner/spinner";
import { driveURL } from "../api/routesURLs";
import GuidesView from "./GuidesView";

function DrivePage() {
  const [loading, setLoading] = useState(true);
  const [manuals, setManuals] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch(driveURL);
        const data = await response.json();

        const manualsFormatted = data.files.map((file) => {
          const fileUrl = `https://drive.google.com/file/d/${file.id}/view`;
          return {
            title: file.name,
            subtitle: "Manual de laboratorio",
            url: fileUrl,
          };
        });

        setManuals(manualsFormatted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error);
        setLoading(false);
      }
    }

    fetchFiles();
  }, []);

  if (loading) {
    return (
      <>
        {" "}
        <h1 className="font-['B612'] ml-10 mt-20 font-bold pt-5 text-3xl">
          {" "}
          Manuales de Laboratorio{" "}
        </h1>{" "}
        <Spinner />{" "}
      </>
    );
  }

  return <GuidesView manuals={manuals} />;
}

export default DrivePage;
