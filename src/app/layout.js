import NavBar from "@/components/navbar/NavBar.jsx";
import Footer from "@/components/footer/Footer.jsx";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ALi | Missoum",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}