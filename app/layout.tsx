import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";
import StarsCanvas from "@/components/main/StarBackground";
import ShootingStars from "@/components/main/starandshooting";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#010304] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
      {/* <ShootingStars/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}