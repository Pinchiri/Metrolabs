"use client";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase.js";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import ProfesorPanelView from "./profesorPanelView.jsx";

const ProfesorPanel = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setName(firebaseUser.displayName);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <ProfesorPanelView name={name} />
    </>
  );
};

export default ProfesorPanel;
