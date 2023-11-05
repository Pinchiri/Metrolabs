"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import {auth} from "../../../firebase.js"
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "@/privateRoute/privateRoute.jsx";


const profesorPanel = () => {

  const [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setName(firebaseUser.displayName)
      } else {
        setUser(null);
      }
    });
        return () => unsubscribe();
    }, []);

    return (
        <>
        <PrivateRoute>
            <div className="mt-12 mx-10">
                <p className="font-['B612'] font-bold pt-8 text-3xl">
                    Bienvenido Profesor:
                </p>
                <p className="mt-3 text-2xl">
                    {name}
                </p>

                <div className='bg-manz-200 p-5 mt-8 rounded-lg lg:mr-12'>

                    <div className='bg-white p-5 rounded-lg mt-3 lg:mr-12 flex justify-center'>
                        <p className="font-['B612'] font-bold pt-1 text-xl">
                            <Link href="/reagentInventary"> Inventario de Reactivos </Link>
                        </p>
                    </div>

                    <div className='bg-white p-5 rounded-lg mt-8 lg:mr-12 flex justify-center'>
                        <p className="font-['B612'] font-bold pt-1 text-xl">
                            <Link href="/materialInventary"> Inventario de Materiales  </Link>
                        </p>
                    </div>

                    <div className='bg-white p-5 rounded-lg mt-8 lg:mr-12 flex justify-center'>
                        <p className="font-['B612'] font-bold pt-1 text-xl">
                            <Link href="/equipmentInventary"> Inventario de Equipos </Link>
                        </p>
                    </div>

                </div>  
            </div>
        </PrivateRoute>
        </>
    )
}

export default profesorPanel;