import metrolabsLogo from "../../assets/logo.png";
import NavbarOptionsList from "./NavbarOptionsList";
import Link from "next/link";
import { homeURL } from "@/constants/urls";
import Image from "next/image";
import UserAvatar from "../UserAvatar/UserAvatar";
import Button from "../Button/Button";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const NavbarView = ({
  isExpanded,
  setIsExpanded,
  options,
  handleAuth,
  profilePicture,
  user,
  isUserLoading,
}) => {
  const renderAvatar = () => {
    if (isUserLoading) {
      return (
        <LoadingSpinner
          color="primary"
          extraStyles="pr-10"
        />
      );
    }

    if (user) {
      return (
        <UserAvatar
          isProfessor={user.isProfessor}
          handleLogout={handleAuth}
          profilePicture={profilePicture}
        />
      );
    }

    return (
      <Button
        text="Iniciar sesión"
        size="sm"
        color="manz"
        extraStyles="text-[10px] btn-xs md:btn-sm md:text-sm px-2 lg:px-4 font-bold rounded-lg hover:scale-105"
        onClick={handleAuth}
      />
    );
  };
  return (
    <nav className="bg-white fixed w-full z-10 top-0 left-0">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-masala rounded-lg lg:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
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
          href={homeURL}
          className="flex items-center md:-ml-30"
        >
          <Image
            loader={() => metrolabsLogo.src}
            src={metrolabsLogo.src}
            width={622}
            height={225}
            className="hover:scale-110 w-[150px] lg:w-[200px] self-center rounded-full transition-all mt-1 md:ml-20 xl:ml-14 2xl:ml-0"
            alt="Metrolabs Logo"
          />
        </Link>
        <div
          className={` ${
            isExpanded ? "" : "hidden"
          } w-full lg:flex lg:w-3/4 lg:justify-center lg:order-1 lg:-ml-10`}
          id="navbar-sticky"
        >
          <NavbarOptionsList options={options} />
        </div>
        <div className="lg:order-2 justify-end items-center">
          {renderAvatar()}
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
