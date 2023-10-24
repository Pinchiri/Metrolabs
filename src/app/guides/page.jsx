import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import GuidesView from "./GuidesView";

const Manuals = async () => {
  try {
    const manualsCollection = collection(db, "manuals");
    const manualsSnapshot = await getDocs(manualsCollection);
    const manuals = manualsSnapshot.docs.map((doc) => doc.data());

    return <GuidesView manuals={manuals} />;
  } catch (error) {
    console.error("Error fetching manuals:", error);
    return <div>Error fetching manuals. Please try again later.</div>;
  }
};

export default Manuals;
