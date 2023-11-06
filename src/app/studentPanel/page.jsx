"use client"
import {useEffect, useState} from "react";
import {auth} from "../../../firebase.js"
import { useRouter } from 'next/navigation'; 
import { onAuthStateChanged } from "firebase/auth";
import StudentPanelView from "./studentPanelView.jsx";


const StudentPanel = () => {

  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setName(firebaseUser.displayName)
      } else {
        router.push('/login');
      }
    });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <StudentPanelView name = {name}/>
        </>
    )
}

export default StudentPanel;