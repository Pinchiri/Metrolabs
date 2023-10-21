import AvailableSchedulesLanding from "./LandingPage/AvailableSchedulesLanding";
import EssentialGuidesLanding from "./LandingPage/EssentialGuidesLanding";

import GeneralInfoLanding from "./LandingPage/GeneralInfoLanding";
import QuoteInfoLanding from "./LandingPage/QuoteInfoLanding";

export default function Home() {
  return (
    <main className="flex min-h-screen px-4 flex-col items-center justify-between mt-24 bg-white overflow-x-clip">
      <AvailableSchedulesLanding />
      <EssentialGuidesLanding />
      <GeneralInfoLanding />
      <QuoteInfoLanding />
    </main>
  );
}
