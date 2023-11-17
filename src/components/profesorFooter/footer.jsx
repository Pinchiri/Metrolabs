import logoUnimet from "../../assets/logoUnimet.png";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>

        <div className="bg-[#FAFAFA] px-5 py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Contáctenos */}
            <div className="space-y-2">
                <h2 className="font-bold text-lg text-manz-200 ">CONTÁCTENOS</h2>
                <p>soportevirtual@unimet.edu.ve</p>
            </div>

            {/* Enlaces de Interés */}
            <div className="space-y-2 ">
                <h2 className="font-bold text-lg text-manz-200 ">ENLACES DE INTERÉS</h2>
                <ul className="list-none space-y-1">
                <Link href="materialInventary">
                    <li className="mb-2 transition-transform hover:scale-105 hover:translate-x-1.5">Inventario de Materiales</li>
                </Link>
                <Link href="equipmentInventary">
                    <li className="mb-2 transition-transform hover:scale-105 hover:translate-x-1.5">Inventario de Equipos </li>
                </Link>
                <Link href="reagentInventary">
                    <li className="mb-2 transition-transform hover:scale-105 hover:translate-x-1.5" >Inventario de Reactivos </li>
                </Link>
                <Link href="classSchedules">
                    <li className="mb-2 transition-transform hover:scale-105 hover:translate-x-1.5">Horarios de clases </li>
                </Link>

                
                </ul>
            </div>

            {/* Campus Puerto La Cruz y Lechería */}
            <div className="space-y-2">
                <h2 className="font-bold text-lg text-manz-200  ">CAMPUS PUERTO LA CRUZ Y LECHERÍA</h2>
                <p>Dirección Puerto La Cruz Av. Municipal con calle Carabobo, Centro Seguros La Previsora</p>
                <p>(0424)-854.61.46</p>
                <p>Dirección Lechería Calle El Dorado, CC Guaica Center</p>
                <p>(0281)-281.45.30</p>
            </div>

            {/* Dirección */}
            <div className="space-y-2">
                <h2 className="font-bold text-lg text-manz-200  ">DIRECCIÓN</h2>
                <p>Distribuidor Universidad Av. Boyacá con autopista Petare-Guarenas. Urbanización Terrazas del Ávila, Caracas-Miranda. Zona postal 1073</p>
                <p>Email: soportevirtual@unimet.edu.ve</p>
                {/* Iconos de redes sociales */}
                <div className="flex space-x-2 mt-2">
                
                <div className="bg-[#6DC8F2] p-3">
                    <Link href="https://twitter.com/unimet">
                        <TwitterIcon style={{ color: 'white' }}/>
                    </Link>
                </div>

               
                <div className="bg-[#2B6CAE] p-3">
                    <Link href="https://www.linkedin.com/school/unimet-ve/">
                        <LinkedInIcon style={{ color: 'white' }} />
                    </Link>
                </div>


                <div className="bg-[#CA2A21] p-3">
                    <Link href="https://www.youtube.com/user/canalunimet">
                        <YouTubeIcon style={{ color: 'white' }} />
                    </Link>
                </div>


                <div className="bg-[#5098D7] p-3">
                    <Link href="https://www.facebook.com/unimet">
                        <FacebookIcon style={{ color: 'white' }} />
                    </Link>
                </div>
                
                
                </div>
            </div>
        </div>

        <div className=" flex flex-row justify-around items-center py-5 px-5 bg-black w-full gap-4">
            <Image
                src={logoUnimet.src}
                width={125}
                height={225}
                className="hover:scale-110 w-[130px] h-12 self-center  transition-all mt-1 md:ml-20 xl:ml-14 2xl:ml-0"
                alt="Unimet Logo"
            />
                <p className="text-white text-center "> 
                Todos los derechos reservados UNIMET 2023
            </p>
        </div>

        </>
    )
}

export default Footer; 