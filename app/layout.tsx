import type { Metadata } from "next";
import Navbar from "@/components/Navbar"
import "./globals.css";
import Head from "next/head";
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
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-poppins antialiased p-4 container md:mx-auto md:p-10 bg-spotify-black">
          { /* Navbar component */ }
          <Navbar />

          { /* Page content */ }
          {children}
        </body>
      </html>
  );
}