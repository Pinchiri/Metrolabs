"use client";

import Logo from "../../assets/logo.png";
import { useContext } from "react";
import Unimet from "../../assets/unimet.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getDoc } from "firebase/firestore";
import { UserContext } from "@/context/userContext";
import GoogleIcon from "@mui/icons-material/Google";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../firebase.js";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const router = useRouter();

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const isUnimetEmail =
        user.email.endsWith("@correo.unimet.edu.ve") ||
        user.email.endsWith("@unimet.edu.ve");
      if (!isUnimetEmail) {
        alert("El correo electrónico no es un correo válido de la Unimet.");
        return;
      }
      setCurrentUser(user);
      const userDocRef = await createUserDocumentFromAuth(user);
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        if (userData.email.endsWith("@correo.unimet.edu.ve")) {
          router.push("/profesorPanel");
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <>
      <div className="ml-6  mt-20 lg:pt-8 flex flex-col items-center justify-center gap-6">
        <Image
          src={Unimet.src}
          width={524}
          height={225}
          className="w-[200px] h-16 self-center mt-1"
          alt="Unimet Logo"
        />
        <Image
          src={Logo.src}
          width={622}
          height={225}
          className="w-[220px] h-12 self-center rounded-full mt-1"
          alt="Metrolabs Logo"
        />
        <h1 className="font-['B612'] font-bold pt-5 text-3xl">
          Ingeniería Química.
        </h1>
        <h1 className="font-['B612'] font-bold pt-5 text-3xl text-center">
          Lab.Procesos de Separación.
        </h1>

        <button
          className="bg-manz-200 p-4 rounded-lg font-bold hover:scale-105 transition-all"
          onClick={logGoogleUser}
        >
          <GoogleIcon style={{ marginRight: "7px" }} />
          Iniciar con Google
        </button>
        <p className=" lg:w-1/4 text-xl text-center">
          {" "}
          ¡Inicia sesión con tu correo Unimet y disfruta de todos los beneficios
          de nuestros laboratorios!{" "}
        </p>
      </div>
    </>
  );
};

export default Login;
