"use client";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase.js";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import StudentPanelView from "./studentPanelView.jsx";

const StudentPanel = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setName(firebaseUser.displayName);
        setEmail(firebaseUser.email);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <StudentPanelView name={name} email={email} />
    </>
  );
};

export default StudentPanel;
