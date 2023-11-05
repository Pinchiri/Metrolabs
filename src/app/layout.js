import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { UserProvider } from "@/context/userContext";

export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#F1F574",
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
