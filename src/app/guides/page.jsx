import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";
import GuidesView from "./GuidesView";

const Manuals = async () => {
  const manualsCollection = collection(db, "manuals");
  const manualsSnapshot = await getDocs(manualsCollection);
  const manuals = manualsSnapshot.docs.map((doc) => doc.data());

  return <GuidesView manuals={manuals} />;
};

export default Manuals;
