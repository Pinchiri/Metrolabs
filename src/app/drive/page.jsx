"use client";


import React, { useState, useEffect } from 'react';

function DrivePage() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFiles() {
      try {
        console.log("LLegue")
        const response = await fetch('/api/drive');
        console.log(response);
        const data = await response.json();

        setFiles(data.files);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching files:', error);
        setLoading(false);
      }
    }

    fetchFiles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Google Drive Files</h1>
      <ul>
        {files.map(file => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DrivePage;