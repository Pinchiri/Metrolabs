import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
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
            <div className="w-full max-w-screen mb-14">
              <Navbar />
            </div>
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
