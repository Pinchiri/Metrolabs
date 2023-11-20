import React from "react";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";
import Link from "next/link";
import { professorPanelURL, studentPanelURL } from "@/constants/urls";
import Image from "next/image";

const UserAvatar = ({ profilePicture, handleLogout, isProfessor }) => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar hover:scale-105"
      >
        {profilePicture && (
          <div className="w-10 rounded-full">
            <Image
              loader={() => profilePicture}
              height={400}
              width={400}
              alt="Avatar"
              src={profilePicture}
            />
          </div>
        )}

        {!profilePicture && (
          <AccountCircleIcon
            size="full"
            color="#434040"
            className=""
          />
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 hover:scale-100"
      >
        <li className="">
          <Link href={isProfessor ? "/profesorPanel" : studentPanelURL}>
            <p className="">
              {isProfessor ? "Panel de control" : "Panel de estudiante"}
            </p>
          </Link>
        </li>
        <li>
          <p
            className=""
            onClick={handleLogout}
          >
            Cerrar sesión
          </p>
        </li>
      </ul>
    </div>
  );
};

export default UserAvatar;
