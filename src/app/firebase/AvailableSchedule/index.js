import {
  doc,
  addDoc,
  collection,
  updateDoc,
  getDoc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { createUser } from "../users";

export const RESERVES_COLLECTION = "Horarios";
