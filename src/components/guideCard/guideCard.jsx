"use client"
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ScienceIcon from '@mui/icons-material/Science';
import { saveAs } from 'file-saver';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
pdfMake.vfs = pdfFonts.pdfMake.vfs;





const GuideCard = ({ title, subtitle, image, pdfUrl }) => {

    const [showPDF, setShowPDF] = useState(false);

    const fetchFile = async () => {
        const storage = getStorage();
        const fileRef = ref(storage, pdfUrl);
        try {
            const downloadURL = await getDownloadURL(fileRef);
            setShowPDF(true); // Activar la visualización del PDF
        } catch (error) {
            console.error('Error al obtener el URL del archivo:', error);
        }
    };

    const togglePDF = () => {
        setShowPDF(prevState => !prevState);
    };


    return (
        <>
        <div 
            className="bg-manz-200 p-4 shadow-md w-11/12 rounded-xl grid  grid-cols-3 gap-4"
            style={{ gridTemplateColumns: '50px 1fr 60px' }}
        >
           <div className='flex items-center'>
                <ScienceIcon            style={{height: "35px", width: "35px"}} />
           </div>
           
            <div className='text-lg'>
                <p className="font-bold"> 
                    {title} 
                </p>
                <p className="font-normal"> 
                    {subtitle} 
                </p>
            </div>
            
            <div className='flex gap-2 items-center'>
                <RemoveRedEyeIcon 
                    onClick={togglePDF} 
                    sx={{ 
                        cursor: 'pointer', 
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { 
                            transform: 'scale(1.3)' 
                        } 
                    }} />
                {pdfUrl && (
                  <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
                     <DownloadIcon
                     sx={{ 
                        cursor: 'pointer', 
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { 
                            transform: 'scale(1.3)' 
                        } 
                    }}
                     />
                  </a>
                )}
            
            </div>
        </div>
        <div className='flex justify-center w-9/12 p-4'>
        {showPDF && (
                    <iframe
                        src={pdfUrl}
                        width="90%" // Ajusta el tamaño como prefieras
                        height="700px"
                        style={{ border: 'none', }}
                        title="PDF Viewer"
                    />
            )}
        </div>
        </>
    )
}

export default GuideCard;
