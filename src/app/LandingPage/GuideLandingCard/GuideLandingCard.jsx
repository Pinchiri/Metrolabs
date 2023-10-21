import React from "react";
import FilePdfBoxIcon from "mdi-react/FilePdfBoxIcon";

const GuideLandingCard = ({ title, subhead, textBody, downloadLink = "" }) => {
  return (
    <div className="w-36 h-72 md:w-48 lg:w-52 xl:w-60 flex flex-col items-center border border-gray-200 rounded-xl p-4 text-masala mt-10">
      <div className="w-full mb-4">
        <div className="flex gap-2 mb-1">
          <p className="font-bold truncate">{title}</p>
          <FilePdfBoxIcon
            size={"1.4em"}
            color="#02073e"
          />
        </div>
        <p className="text-sm whitespace-nowrap truncate">{subhead}</p>
      </div>
      <div className="w-full h-[135px] text-[10px] mb-4 overflow-hidden">
        <p className="line-clamp-[8]">{textBody}</p>
      </div>
      {/* FIXME - Change this to a button component */}
      <div className="w-full text-center text-sm font-medium rounded-full bg-masala text-white py-[6px]">
        Descargar
      </div>
    </div>
  );
};

export default GuideLandingCard;
