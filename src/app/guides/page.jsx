"use client";

import React, { useState, useEffect } from "react";
import GuideCard from "@/components/guideCard/guideCard";

function DrivePage() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch("/api/drive");
        const data = await response.json();
        setFiles(data.files);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error);
        setLoading(false);
      }
    }

    fetchFiles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen pl-10 pt-28 text-2xl font-bold">
      <h1 className="font-['B612'] pt-5 pb-10 text-3xl">
        {" "}
        Manuales de Laboratorio{" "}
      </h1>
      {files.map((file, index) => {
        const fileUrl = `https://drive.google.com/file/d/${file.id}/view`;
        return (
          <GuideCard
            key={index}
            title={file.name}
            subtitle="Manual de Laboratorio"
            pdfUrl={fileUrl}
          />
        );
      })}
    </div>
  );
}

export default DrivePage;
