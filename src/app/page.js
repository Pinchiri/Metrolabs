import AvailableSchedulesLanding from "./LandingPage/AvailableSchedulesLanding";

import GeneralInfoLanding from "./LandingPage/GeneralInfoLanding";
import QuoteInfoLanding from "./LandingPage/QuoteInfoLanding";

export default function Home() {
  return (
    <main className="flex min-h-screen px-4 flex-col items-center justify-between mt-24 bg-white overflow-x-clip">
      <AvailableSchedulesLanding />
      <GeneralInfoLanding />
      <QuoteInfoLanding />
    </main>
  );
}
