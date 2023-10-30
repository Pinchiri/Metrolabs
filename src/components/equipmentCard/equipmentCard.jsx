import EditIcon from '@mui/icons-material/Edit';

const EquipmentCard = ({equipment, brand, model, quantity, ubication, userManual, frecuency, date, observations }) => {
    return (
        <>
        <div className="bg-white rounded-lg mt-1 mb-3 p-3">

            {/* Editar información */}
            <div className="flex justify-end p-3 gap-2">
                <EditIcon/>
                <p> Editar </p>

            </div>
            
            {/* Mostrar equipo */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Equipo: </h3>
                <p> {equipment} </p>
            </div>

            {/* Mostrar marca */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Marca: </h3>
                <p> {brand} </p>
            </div>

            {/* Mostrar modelo */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Modelo: </h3>
                <p> {model} </p>
            </div>

            {/* Mostrar cantidad */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Cantidad: </h3>
                <p> {quantity} </p>
            </div>

            {/* Mostrar ubicación */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Ubicación: </h3>
                <p> {ubication} </p>
            </div>

            {/* Mostrar Manual de usuario */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Manual: </h3>
                <p> {userManual} </p>
            </div>

            {/* Mostrar frecuencia de mantenimiento */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Frecuencia Mantenimiento: </h3>
                <p> {frecuency} </p>
            </div>

            {/* Mostrar fecha último mantenimiento */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Fecha último Mantenimiento: </h3>
                <p> {date} </p>
            </div>

            {/* Mostrar observaciones */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Comentarios: </h3>
                <p> {observations} </p>
            </div>
            

        </div>
        </>
    )

}

export default EquipmentCard;
