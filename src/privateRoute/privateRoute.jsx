"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Spinner from "@/components/Spinner/spinner";

const PrivateRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        if (!firebaseUser.email.endsWith("@correo.unimet.edu.ve")) {
          router.push("/");
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
  }, [router]);

  if (isLoading) {
    return <Spinner />;
  }

  return children;
};

export default PrivateRoute;
