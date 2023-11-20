"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Spinner from "@/components/Spinner/spinner";
import { useUserData } from "@/context/userContext";
import { studentPanelURL } from "@/constants/urls";

const ProfessorRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { currentUser, isUserLoading } = useUserData();

  useEffect(() => {
    if (!isUserLoading) {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser && currentUser) {
          if (!currentUser.isProfessor) {
            router.push(studentPanelURL);
          } else {
            setIsLoading(false);
          }
        } else {
          router.push("/login");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [router, isUserLoading]);

  if (isLoading || isUserLoading) {
    return <Spinner />;
  }

  return children;
};

export default ProfessorRoute;
