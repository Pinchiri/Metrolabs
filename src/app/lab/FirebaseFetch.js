import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

const fetchInformation = async (name) => {
  try {
    const firebaseCollection = collection(db, name);
    const firebaseSnapshot = await getDocs(firebaseCollection);
    const firebaseData = firebaseSnapshot.docs.map(doc => doc.data());
    console.log(firebaseData);
    return firebaseData;
  } catch (error) {
    console.error("Error al obtener los profesores: ", error);
    return [];
  }
};


export { fetchInformation};
