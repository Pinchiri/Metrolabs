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

    return (
        <div 
            className="bg-manz-200 p-4 shadow-md w-9/12 rounded-xl grid  grid-cols-3 gap-4 m-5"
            style={{ gridTemplateColumns: '50px 1fr 60px' }}
        >
           <div className='flex items-center'>
                <ScienceIcon />
           </div>
           
            <div>
                <p className="font-black"> 
                    {title} 
                </p>
                <p className=""> 
                    {subtitle} 
                </p>
            </div>
            
            <div className='flex gap-2 items-center'>
                {pdfUrl && (
                  <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
                    <RemoveRedEyeIcon/>
                  </a>
                  
                )}
                <DownloadIcon onClick={fetchFile } style={{ cursor: 'pointer' }}/>
                  {/* Aquí se muestra el PDF en un iframe si showPDF es verdadero */}
                {showPDF && (
                    <iframe
                        src={pdfUrl}
                        width="500px" // Ajusta el tamaño como prefieras
                        height="500px"
                        style={{ border: 'none', margin: '20px auto', display: 'block' }}
                        title="PDF Viewer"
                    />
            )}
            </div>
        </div>
    )
}

export default GuideCard;
