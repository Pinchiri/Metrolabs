import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#F1F574",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col font-sans">
          <div className="w-full max-w-screen mb-14">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
