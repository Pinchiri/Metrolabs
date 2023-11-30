import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Toast from "@/components/Toaster/Toast";
import { UserProvider } from "@/context/userContext";

export const metadata = {
  title: "Process Lab",
  description: "Tu app para reservar labs",
  manifest: "/manifest.json",
  themeColor: "#FFB635",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <div className="flex flex-col font-sans">
            <Navbar />
            <div className="z-0 mt-20">{children}</div>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
