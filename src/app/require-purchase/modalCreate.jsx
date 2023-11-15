import React from "react";
import { Modal, Button, Typography, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalCreatePurchase = ({ open, handleClose }) => {

    const [formData, setFormData] = React.useState({
        material: '',
        capacity: '',
        brand: '',
        quantity: '',
        price: '',
        status: '',
        observations: '',
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            console.log(formData)
            const response = await fetch("/api/sheetsRequirePurchaseCreate", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Resultado de Google Sheets:", result);
                handleClose();
            } else {
                console.error('Error en el servidor al añadir fila');
                console.log(response);
            }
        } catch (error) {
            console.error('Error al enviar datos al servidor:', error);
        }
    };
    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <div className="flex flex-row justify-between">           
                <Typography 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h1"
                    style={{ fontWeight: 'bold', fontFamily: 'B612, sans-serif' }}
                    >
                    Añadir nuevo requerimiento de compra
                </Typography>

            <Button onClick={handleClose}> <CloseIcon style={{ color: 'black' }}/> </Button> 
            </div>
        
          {/* Añadir material */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3 mt-8">
            <h3 className="font-bold text-lg"> Material: </h3>
                <input
                name="material"
                value={formData.material}
                onChange={handleChange}
                className="rounded-lg p-2 hover:border-2 hover:border-amber-300"
                type="text"
                />
          </div>

          {/* Añadir capacidad */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-lg"> Capacidad: </h3>
                <input
                 name="capacity"
                 value={formData.capacity}
                 onChange={handleChange}
                className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
                type="text"
                />
          </div>

          {/* Añadir marca */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-lg"> Marca: </h3>
                <input
                 name="brand"
                 value={formData.brand}
                 onChange={handleChange}
                className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
                type="text"
                />
          </div>

          {/* Añadir cantidad */}
          <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-lg"> Cantidad: </h3>
                <input
                 name="quantity"
                 value={formData.quantity}
                 onChange={handleChange}
                className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
                type="text"
                />
          </div>


          {/* Añadir precio */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-lg"> Precio: </h3>
                <input
                 name="price"
                 value={formData.price}
                 onChange={handleChange}
                className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
                type="text"
                />
          </div>

           {/* Añadir Status */}
           <div className="grid grid-cols-2 bg-[#FFF8E4] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-lg"> Status: </h3>
                <input
                 name="status"
                 value={formData.status}
                 onChange={handleChange}
                className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
                type="text"
                />
          </div>

          {/* Añadir Comentarios */}
          <div className="grid grid-cols-2 bg-[#F7F6F5] rounded-lg p-3 mb-3">
            <h3 className="font-bold text-lg"> Comentarios: </h3>
                <input
                 name="observations"
                 value={formData.observations}
                 onChange={handleChange}
                className=" rounded-lg p-2 hover:border-2 hover:border-amber-300"
                type="text"
                />
          </div>

          {/* Añadir Botón de enviar */}

          <div className="flex flex-row justify-end">
            <button className="bg-manz-200 text-black font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                 Enviar
            </button>
          </div>
          

          
        </Box>
      </Modal>
    </div>
  );
}