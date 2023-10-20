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
        <div className="font-sans">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
