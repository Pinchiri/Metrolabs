import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Metrolabs",
  description: "Tu app para reservar labs",
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
