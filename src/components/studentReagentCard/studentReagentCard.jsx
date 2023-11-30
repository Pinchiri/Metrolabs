import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StudentReagentCard = ({
  date,
  email,
  request,
  name,
  DNI,
  carnet,
  partnerName,
  partnerDNI,
  partnerCarnet,
  reagentName,
  CAS,
  brand,
  quantity,
  tutorName,
  profesorName,
  profesorDepartment,
  status,
}) => {
  const checkValue = (value) => (value ? value : "No especificado");
  const statusColor =
    status == "Aprobado"
      ? "bg-green-500"
      : status == "Rechazado"
      ? "bg-red-500"
      : status == "Pendiente"
      ? "bg-yellow-500"
      : status == null
      ? "bg-yellow-500"
      : "bg-gray-500";

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ backgroundColor: "#283C7C", color: "white" }}
      >
        <div className="flex flex-row justify-between w-full items-center">
          <Typography>
            {request} - Solicitud de: {reagentName}
          </Typography>
          <Typography>{date}</Typography>
          {/* Casilla de estado con color */}
          <div className={`${statusColor} text-white p-2 rounded-lg mr-2`}>
            {status}
            {status == null && "Pendiente"}
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails style={{ backgroundColor: "white", color: "black" }}>
        <Typography component={"span"}>
          <p>
            <span style={{ fontWeight: "bold" }}>Nombre del solicitante:</span>{" "}
            {checkValue(name)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Cédula de identidad del solicitante:
            </span>{" "}
            {checkValue(DNI)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Número de carnet del solicitante:
            </span>{" "}
            {checkValue(carnet)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Nombre del compañero:</span>{" "}
            {checkValue(partnerName)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Cédula de identidad del compañero:
            </span>{" "}
            {checkValue(partnerDNI)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Carnet del compañero:</span>{" "}
            {checkValue(partnerCarnet)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Nombre del reactivo solicitado:
            </span>{" "}
            {checkValue(reagentName)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Número de CAS:</span>{" "}
            {checkValue(CAS)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Marca:</span>{" "}
            {checkValue(brand)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Cantidad solicitada:</span>{" "}
            {checkValue(quantity)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Nombre del tutor:</span>{" "}
            {checkValue(tutorName)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Nombre del profesor:</span>{" "}
            {checkValue(profesorName)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Nombre del departamento del profesor:
            </span>{" "}
            {checkValue(profesorDepartment)}
          </p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default StudentReagentCard;
