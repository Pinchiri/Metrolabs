import metrolabsLogo from "../../assets/metrolabs-logo.png";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import NavbarOptionsList from "./NavbarOptionsList";
import Link from "next/link";
import { homeURL } from "@/constants/urls";

const NavbarView = ({ isExpanded, setIsExpanded, options }) => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-masala rounded-lg lg:hidden hover:bg-manz-200 focus:outline-none focus:ring-2 focus:ring-manz-200"
          aria-controls="navbar-sticky"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <Link
          //FIXME - Change link
          href={homeURL}
          className="flex items-center md:-ml-20"
        >
          <img
            src={metrolabsLogo.src}
            className="hover:bg-manz-200 w-[220px] h-12 rounded-full transition-all px-6 py-1 md:ml-20 xl:ml-14 2xl:ml-0"
            alt="Metrolabs Logo"
          />
        </Link>
        <div className="flex lg:order-2 h-1/3 w-10 cursor-pointer hover:scale-110 transition-all">
          <AccountCircleIcon
            size="full"
            color="#434040"
            className="hover:fill-manz-200"
          />
        </div>
        <div
          className={` ${
            isExpanded ? "" : "hidden"
          } w-full lg:flex lg:w-3/4 lg:justify-center lg:order-1 lg:-ml-10`}
          id="navbar-sticky"
        >
          <NavbarOptionsList options={options} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
