import Link from "next/link";
import React from "react";

const NavbarOptionsList = ({ options }) => {
  return (
    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium rounded-lg bg-primary lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white lg:items-center">
      {options.map((option, index) => (
        <li key={index}>
          <Link
            href={option.link}
            className="block py-2 pl-3 pr-4 text-masala rounded-md hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0"
            aria-current="page"
          >
            {option.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarOptionsList;
