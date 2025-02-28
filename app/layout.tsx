import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Alex Greene | Software Engineer",
  description: "Portfolio Website",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-poppins antialiased p-4 container md:mx-auto md:p-10 bg-spotify-black">
        {/* Navbar component */}
        <Navbar />

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}