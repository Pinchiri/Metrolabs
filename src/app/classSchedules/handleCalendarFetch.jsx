"use client";

import { db } from "../../../firebase";
import { getDocs, collection, doc, setDoc, getDoc } from "firebase/firestore";

export const handleCalendarFetch = async () => {
  const dates = getDates();
  return dates;
};

const getDates = async () => {
  const datesCollection = collection(db, "labSchedule");

  try {
    const datesSnapshot = await getDocs(datesCollection);
    const dates = datesSnapshot.docs.map((doc) => doc.data());
    return dates;
  } catch (error) {
    console.error("Error getting documents:", error);
  }
};
