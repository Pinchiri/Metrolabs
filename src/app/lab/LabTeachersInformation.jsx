import TeacherCard from "@/components/teachersCard/teachersCard";
import TeachersInformation from "@/components/teachersCard/teachersInformation";

const LabTeachersInformation = () => {
  return (
    <>
      <p
        className="pl-10 pb-3 mt-10 flex justify-center mb-4 text-stratos px-4 text-3xl sm:text-3xl self-left tracking-tighter font-b612 font-bold"
        id="LabTeachersInformation"
      >
        Nuestros Profesores
      </p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {TeachersInformation.map((teacher, index) => (
          <TeacherCard
            key={index}
            name={teacher.name}
            imageURL={teacher.imageURL || "URL_de_imagen_predeterminada"}
            education={teacher.education}
            email={teacher.email}
            interestAreas={teacher.interestAreas}
            asignatures={teacher.asignatures}
            publications={teacher.publications}
          />
        ))}
      </div>
    </>
  );
};

export default LabTeachersInformation;
