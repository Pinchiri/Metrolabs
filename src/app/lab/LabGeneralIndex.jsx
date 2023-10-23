"use client"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShieldIcon from '@mui/icons-material/Shield';
import ScienceIcon from '@mui/icons-material/Science';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const LabGeneralIndex = () => {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
        <h1  className="font-b612 text-stratos tracking-tighter mt-20 pb-5 pl-10 text-3xl font-bold">
                Información del Laboratorio
            </h1>
        <div className="flex-col align-start  pl-10 lg: flex lg:flex-row lg: justify-around">
            <div className=" flex flex-row gap-8 mb-10" >
                <div className="bg-manz-200 p-2.5 rounded-full inline-flex items-center justify-center align-center h-14">
                <LocationOnIcon style={{ height: "35px", width: "35px" }} />
                </div >
                <div>
                    <h3 className="text-lg font-bold">
                       Ubicación del Laboratorio
                    </h3>
                    <p>
                       • Dirección exacta.
                    </p>
                    <p>
                       • Horarios de operación.
                    </p>
                    <p>
                       • Mapa o croquis de ubicación.
                    </p>
                    <div className="flex flex-row gap-2 align-center font-bold mt-2 hover:text-manz-200"
                        onClick={() => scrollToElement('LabInformation')}
                    >
                        <p>
                            Ver más detalles
                        </p>
                        <ArrowForwardIosIcon style={{ height: "15px", width: "15px", marginTop:"5px" }} />
                    </div>
                </div>
            </div>

            <div className=" flex flex-row gap-8 mb-10" >
                <div className="bg-manz-200 p-2.5 rounded-full inline-flex items-center justify-center align-center h-14">
                <ScienceIcon style={{ height: "35px", width: "35px" }} />
                </div >
                <div>
                    <h3 className="text-lg font-bold">
                        Equipamiento Disponible
                    </h3>
                    <p>
                       • Lista de instrumentos y máquinas.
                    </p>
                    <p>
                       • Capacidad y especificaciones.
                    </p>
                    <p>
                       • Disponibilidad y horarios de uso.
                    </p>
                    <div 
                        className="flex flex-row gap-2 align-center font-bold mt-2 hover:text-manz-200"
                        onClick={() => scrollToElement('LabEquipment')}

                    >
                        <p>
                            Ver más detalles
                        </p>
                        <ArrowForwardIosIcon style={{ height: "15px", width: "15px", marginTop:"5px" }} />
                    </div>
                </div>
            </div>


            <div className=" flex flex-row gap-8 mb-10" >
                <div className="bg-manz-200 p-2.5 rounded-full inline-flex items-center justify-center align-center h-14">
                <ShieldIcon style={{ height: "35px", width: "35px" }} />
                </div >
                <div>
                    <h3 className="text-lg font-bold">
                        Normas de Seguridad.
                    </h3>
                    <p>
                       • Uso obligatorio de batas, guantes.
                    </p>
                    <p>
                       • Procedimientos en caso de emergencia.
                    </p>
                    <p>
                       • Manejo y disposición de sustancias peligrosas.
                    </p>
                    <div className="flex flex-row gap-2 align-center font-bold mt-2 hover:text-manz-200"
                         onClick={() => scrollToElement('LabGuideRules')}
                         >
                        <p>
                            Ver más detalles
                        </p>
                        <ArrowForwardIosIcon style={{ height: "15px", width: "15px", marginTop:"5px" }} />
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default LabGeneralIndex;