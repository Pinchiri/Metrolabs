import { db } from "../../firebase.js";
import { getDocs, collection, limit, query } from "firebase/firestore";

import AvailableSchedulesLanding from "./LandingPage/AvailableSchedulesLanding";
import EssentialGuidesLanding from "./LandingPage/EssentialGuidesLanding";
import GeneralInfoLanding from "./LandingPage/GeneralInfoLanding";
import QuoteInfoLanding from "./LandingPage/QuoteInfoLanding";

const Home = async () => {
  const manualsCollection = collection(db, "manuals");
  const manualsQuery = query(manualsCollection, limit(4));
  const manualsSnapshot = await getDocs(manualsQuery);
  const manuals = manualsSnapshot.docs.map((doc) => doc.data());

  return (
    <main className="flex px-4 flex-col items-center justify-between bg-white">
      <AvailableSchedulesLanding />
      <EssentialGuidesLanding guides={manuals} />
      <GeneralInfoLanding />
      <QuoteInfoLanding />
    </main>
  );
};

export default Home;
