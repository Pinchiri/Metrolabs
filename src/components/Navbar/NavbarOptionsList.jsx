import React from "react";

const NavbarOptionsList = ({ options }) => {
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-manz-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:items-center">
      {options.map((option) => (
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-masala rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-manz-400 md:p-0"
            aria-current="page"
          >
            {option}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarOptionsList;
