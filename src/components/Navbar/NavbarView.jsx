import metrolabsLogo from "../../assets/metrolabs-logo.png";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";

const NavbarView = ({ isExpanded, setIsExpanded }) => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-masala rounded-lg md:hidden hover:bg-manz-200 focus:outline-none focus:ring-2 focus:ring-manz-200"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <a
          //FIXME - Change link
          href="/"
          className="flex items-center md:-ml-20"
        >
          <img
            src={metrolabsLogo.src}
            className="hover:bg-manz-200 rounded-full transition-all px-6 py-1"
            alt="Metrolabs Logo"
          />
        </a>
        <div className="flex md:order-2 h-1/3 w-10 cursor-pointer hover:scale-110 transition-all">
          <AccountCircleIcon
            size="full"
            color="#434040"
            className="hover:fill-manz-200"
          />
        </div>
        <div
          className={` ${
            isExpanded ? "" : "hidden"
          } w-full md:flex md:w-3/4 md:justify-center md:order-1 md:-ml-10`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-manz-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:items-cente">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-masala rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-manz-400 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-masala rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-manz-400 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-masala rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-manz-400 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-masala rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-manz-400 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
