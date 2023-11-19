"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { getDoc } from "firebase/firestore";
import { UserContext } from "@/context/userContext";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../firebase.js";
import LoginView from "./loginView";

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
        if (
          userData.email.endsWith("@correo.unimet.edu.ve") &&
          userData.email != "erika.hernandez@correo.unimet.edu.ve"
        ) {
          router.push("/student-panel");
        } else {
          router.push("/profesorPanel");
        }
      }
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <>
      <LoginView logGoogleUser={logGoogleUser} />
    </>
  );
};

export default Login;
