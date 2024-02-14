import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Navbar1 from "./Navbar/Navbar1";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denver Nugets",
  description: "NBA Champions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full  ${inter.className}`}>
        <SessionProvider>
          <Navbar1 />
          <main className=" m-auto">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
