"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { getDoc } from "firebase/firestore";
import { UserContext } from "@/context/userContext";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../firebase.js";
import LoginView from "./loginView";
import { useToaster } from "@/components/Toaster/hooks/useToaster.jsx";
import { studentPanelURL } from "@/constants/urls";
import { professorPanelURL } from "@/constants/urls";
import Spinner from "@/components/Spinner/spinner.jsx";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const router = useRouter();
  const { isVisible, showToast, toasterProperties, setToasterProperties } =
    useToaster();

  const [isLoading, setIsLoading] = useState(false);

  const logGoogleUser = async () => {
    setIsLoading(true);
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
        const userDocRef = await createUserDocumentFromAuth(user);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          const whitelist = [
            process.env.NEXT_PUBLIC_REACT_ADMIN_EMAIL_1,
            process.env.NEXT_PUBLIC_REACT_ADMIN_EMAIL_2,
            process.env.NEXT_PUBLIC_REACT_ADMIN_EMAIL_3,
          ];
          const isProfessor =
            whitelist.includes(user.email) ||
            user.email.endsWith("@unimet.edu.ve");

          console.log("isProfessor", isProfessor);

          setCurrentUser({ ...user, isProfessor });

          if (isProfessor) {
            router.push(professorPanelURL);
            setIsLoading(false);
          } else {
            router.push(studentPanelURL);
            setIsLoading(false);
          }
        }
      }
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

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
