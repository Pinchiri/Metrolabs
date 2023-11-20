"use client";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase.js";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import StudentPanelView from "./studentPanelView.jsx";
import { useUserData } from "@/context/userContext.jsx";
import Spinner from "@/components/Spinner/spinner.jsx";
import useStudentFooterLinks from "@/utils/footerUtils/hooks/useStudentFooterLinks.jsx";

const StudentPanel = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { currentUser, isUserLoading } = useUserData();
  const studentFooterLinks = useStudentFooterLinks();

  if (isUserLoading) return <Spinner />;

  return (
    <>
      <StudentPanelView
        name={currentUser?.displayName || ""}
        email={currentUser?.email || "@"}
        footerLinks={studentFooterLinks}
      />
    </>
  );
};

export default StudentPanel;
