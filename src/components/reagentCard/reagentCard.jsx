import EditIcon from '@mui/icons-material/Edit';

const ReagentCard = ({reactive, formule, cas, brand, concentration, quantity, units, risk, ubication, observations}) => {
    return (
        <>
        <div className="bg-white rounded-lg mt-1 mb-3 p-3">

            {/* Editar información */}
            <div className="flex justify-end p-3 gap-2">
                <EditIcon/>
                <p> Editar </p>

            </div>
            
            {/* Mostrar reactivo */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Reactivo: </h3>
                <p> {reactive} </p>
            </div>

            {/* Mostrar formula */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Fórmula: </h3>
                <p> {formule} </p>
            </div>

            {/* Mostrar nro CAS */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> No CAS: </h3>
                <p> {cas} </p>
            </div>

            {/* Mostrar marca */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Marca: </h3>
                <p> {brand} </p>
            </div>

            {/* Mostrar concentración */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Pur/Con%: </h3>
                <p> {concentration} </p>
            </div>

            {/* Mostrar cantidad */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Cantidad: </h3>
                <p> {quantity} </p>
            </div>

            {/* Mostrar unidades */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Unidad: </h3>
                <p> {units} </p>
            </div>

            {/* Mostrar riesgo */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Riesgo: </h3>
                <p> {risk} </p>
            </div>

            {/* Mostrar ubicación */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Ubicación: </h3>
                <p> {ubication} </p>
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

export default ReagentCard;