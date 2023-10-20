import DownloadIcon from '@mui/icons-material/Download'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ScienceIcon from '@mui/icons-material/Science';

const GuideCard = ({ title, subtitle, image }) => {
    
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
                <RemoveRedEyeIcon/>
                <DownloadIcon/>
            </div>
        </div>
    )
}

export default GuideCard;
