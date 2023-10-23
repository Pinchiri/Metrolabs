import React from "react";
import FilePdfBoxIcon from "mdi-react/FilePdfBoxIcon";
import Button from "@/components/Button/Button";
import Link from "next/link";

const GuideLandingCard = ({ title, subhead, textBody, downloadLink = "" }) => {
  return (
    <div className="w-36 h-72 md:w-48 lg:w-52 xl:w-60 flex flex-col items-center shadow-md bg-manz-200 rounded-xl p-4 text-masala mt-10">
      <div className="w-full mb-4">
        <div className="flex gap-2 mb-1">
          <p className="w-5/6 font-bold text-sm lg:text-base">{title}</p>
          <FilePdfBoxIcon
            size={"1.4em"}
            color="#434040"
          />
        </div>
        <p className="text-sm lg:text-base lg:font-medium whitespace-nowrap truncate">
          {subhead}
        </p>
      </div>
      <div className="w-full h-[135px] mb-4 overflow-hidden">
        <p className="text-[10px] lg:text-sm lg:px-2 line-clamp-6 text-ellipsis">
          {textBody}
        </p>
      </div>
      {/* FIXME - Change this to a button component */}
      <Link
        href={downloadLink}
        target="_blank"
      >
        <Button
          text="Descargar"
          size="sm"
          color="masala"
          extraStyles="px-6"
        />
      </Link>
    </div>
  );
};

export default GuideLandingCard;
