import EditIcon from '@mui/icons-material/Edit';

const MaterialCard = ({material, capacity, brand, quantity, ubication, observations }) => {
    return (
        <>
        <div className="bg-white rounded-lg mt-1 mb-3 p-3">

            {/* Editar información */}
            <div className="flex justify-end p-3 gap-2">
                <EditIcon/>
                <p> Editar </p>

            </div>
            
            {/* Mostrar material*/}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Material: </h3>
                <p> {material} </p>
            </div>

            {/* Mostrar capacidad */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Capacidad: </h3>
                <p> {capacity} </p>
            </div>

            {/* Mostrar marca */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Marca: </h3>
                <p> {brand} </p>
            </div>

            {/* Mostrar ubicación */}
            <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Ubicación: </h3>
                <p> {ubication} </p>
            </div>

            {/* Mostrar comentarios */}
            <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3"> 
                <h3 className="font-bold text-lg"> Comentario: </h3>
                <p> {observations} </p>
            </div>
        </div>
        </>
    )

}

export default MaterialCard;