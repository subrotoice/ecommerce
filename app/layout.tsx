import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import "./globals.css";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eDev E-Commerce Application",
  description: "A complete e-commerce application with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className="mt-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 py-12">
          <Footer />
        </div>
      </body>
    </html>
  );
}
