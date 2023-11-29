"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDoc } from "firebase/firestore";
import { UserContext } from "@/context/userContext";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../firebase.js";
import LoginView from "./loginView";
import { useToaster } from "@/components/Toaster/hooks/useToaster.jsx";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const router = useRouter();
  const { isVisible, showToast, toasterProperties, setToasterProperties } =
    useToaster();

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const isUnimetEmail =
        user.email.endsWith("@correo.unimet.edu.ve") ||
        user.email.endsWith("@unimet.edu.ve");
      if (!isUnimetEmail) {
        setToasterProperties({
          toasterMessage: "No se puede ingresar sin un correo UNIMET",
          typeColor: "error",
        });
        showToast();
        setCurrentUser(null);
      } else {
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
      }
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <>
      <LoginView
        logGoogleUser={logGoogleUser}
        isToasterVisible={isVisible}
        toasterProperties={toasterProperties}
      />
    </>
  );
};

export default Login;
