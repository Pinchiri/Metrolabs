const TeacherCard = ({
  name,
  imageURL,
  education,
  email,
  interestAreas,
  asignatures,
}) => {
  return (
    <>
      <div className="ml-10 mr-10">
        <h3 className="text-2xl font-bold font-b612 font-bold text-manz-200">
          {" "}
          {name}{" "}
        </h3>
        <p> Adscrito a la Facultad de Ingeniería. </p>
        <div className="flex justify-center">
          <img
            src={imageURL}
            className="h-[250px] w-[auto] mt-5 lg:h-[400px]"
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
      </div>
    </>
  );
};

export default TeacherCard;
