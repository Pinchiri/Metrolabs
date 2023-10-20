import AvailableSchedulesLanding from "./AvailableSchedulesLanding";

import GeneralInfoLanding from "./GeneralInfoLanding";

export default function Home() {
  return (
    <main className="flex min-h-screen px-4 flex-col items-center justify-between mt-24 bg-white overflow-x-clip ">
      <AvailableSchedulesLanding />
      <div className="w-full flex flex-col mt-10 mb-10">
        <p className="text-stratos text-3xl font-b612 font-bold">
          Guías Esenciales del Laboratorio
        </p>
      </div>
      <GeneralInfoLanding />
      <div className="w-full flex flex-col mt-10 mb-10">
        <p className="text-stratos text-3xl font-b612 font-bold">
          Te invitamos a seguir creciendo en nuestros laboratorios
        </p>
      </div>
    </main>
  );
}
