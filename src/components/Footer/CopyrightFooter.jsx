import Image from "next/image";
import React from "react";
import logoUnimet from "../../assets/logoUnimet.png";

const CopyrightFooter = () => {
  return (
    <div className=" flex flex-row justify-around items-center py-5 px-5 bg-black w-full gap-4">
      <Image
        src={logoUnimet.src}
        width={125}
        height={225}
        className="hover:scale-110 w-[130px] h-12 self-center  transition-all mt-1 md:ml-20 xl:ml-14 2xl:ml-0"
        alt="Unimet Logo"
      />
      <p className="text-white text-center">
        Todos los derechos reservados UNIMET 2023
      </p>
    </div>
  );
};

export default CopyrightFooter;
