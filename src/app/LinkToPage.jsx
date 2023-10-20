import Link from "next/link";
import React from "react";

const LinkToPage = ({ text, link = "/" }) => {
  return (
    <Link
      //FIXME - Change href to schedules view
      href={link}
      className="sm:mt-4 self-end flex flex-row gap-4 items-center text-masala font-medium text-md sm:text-2xl lg:text-4xl  hover:scale-110 hover:font-bold transform transition-all"
    >
      {text}{" "}
      <svg
        width="20"
        height="20"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <path
          d="M5.70028 5.87365C5.70028 6.07765 5.63185 6.28164 5.49528 6.43717L1.19546 11.3316C0.921938 11.643 0.478469 11.643 0.205058 11.3316C-0.0683528 11.0204 -0.0683528 10.5157 0.205058 10.2043L4.00978 5.87365L0.205191 1.54293C-0.0682199 1.23158 -0.0682199 0.72693 0.205191 0.415729C0.478602 0.104225 0.922071 0.104225 1.19559 0.415729L5.49541 5.31012C5.63201 5.46573 5.70028 5.66971 5.70028 5.87365Z"
          fill="#434040"
        />
      </svg>
    </Link>
  );
};

export default LinkToPage;
