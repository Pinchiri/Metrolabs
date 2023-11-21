import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ReservationCard = ({
  date,
  email,
  reason,
  studentFullName,
  DNI,
  studentCarnet,
  partnerName,
  partnerDNI,
  partnerCarnet,
  labName,
  useDate,
  tutorName,
  professorName,
  professorDepartment,
  status,
}) => {
  const checkValue = (value) => (value ? value : "No especificado");
  const statusColor =
    status === "Aprobado"
      ? "bg-green-500"
      : status === "Rechazado"
      ? "bg-red-500"
      : status === "En proceso"
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
            {reason} - Solicitud de: {labName}
          </Typography>
          <Typography>{date}</Typography>
          {/* Casilla de estado con color */}
          <div className={`${statusColor} text-white p-2 rounded-lg mr-2`}>
            {status}
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails style={{ backgroundColor: "white", color: "black" }}>
        <Typography component={"span"}>
          <p>
            <span style={{ fontWeight: "bold" }}>Nombre del solicitante:</span>{" "}
            {checkValue(studentFullName)}
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
            {checkValue(studentCarnet)}
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
              Nombre del espacio o equipo solicitado:
            </span>{" "}
            {checkValue(labName)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Fecha de uso:</span>{" "}
            {checkValue(useDate)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Nombre del tutor:</span>{" "}
            {checkValue(tutorName)}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Nombre del profesor:</span>{" "}
            {checkValue(professorName)}
          </p>

          <p>
            <span style={{ fontWeight: "bold" }}>
              Departamento del profesor:
            </span>{" "}
            {checkValue(professorDepartment)}
          </p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReservationCard;
