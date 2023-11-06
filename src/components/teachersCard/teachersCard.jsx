const TeacherCard = ({
  name,
  imageURL,
  education,
  email,
  interestAreas,
  asignatures,
  publications,
}) => {
  return (
    <>
      <div className="ml-10 mr-10">
        <h3 className="text-2xl flex justify-center font-bold font-b612 font-bold text-manz-200">
          {" "}
          {name}{" "}
        </h3>
        <p className="flex justify-center">
          {" "}
          Adscrito a la Facultad de Ingeniería.{" "}
        </p>
        <div className="flex justify-center pb-3">
          <img
            src={imageURL}
            className="h-[250px] w-[350px] mt-5 lg:h-[400px]"
            alt="Imagen del profesor"
          />
        </div>
        <h3 className="text-xl font-bold mb-1">
          {" "}
          Educación y formación académica concluida:{" "}
        </h3>
        <p className="mb-7 whitespace-pre-line"> {education} </p>

        <h3 className="text-xl font-bold mb-1"> Contacto: </h3>
        <p className="mb-7"> {email} </p>

        <h3 className="text-xl font-bold mb-1"> Áreas de interés: </h3>
        <p className="mb-7"> {interestAreas} </p>

        <h3 className="text-xl font-bold mb-1"> Asignaturas que imparte: </h3>
        <p className="mb-7 whitespace-pre-line "> {asignatures} </p>

        {/* <h3 className="text-xl font-bold mb-1"> Publicaciones (últimos 5 años): </h3>
            <p className="mb-7 overflow-hidden whitespace-pre-line "> {publications} </p> */}
      </div>
    </>
  );
};

export default TeacherCard;
