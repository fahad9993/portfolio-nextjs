import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Fahad Rahman | Portfolio",
  description: "Strive for excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.className} bg-gradient-to-r from-green to to-blue-400`}
      >
        <main className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 sm:px-20 md:px-32">
          <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl p-4 text-center">
            <Sidebar />
          </div>
          <div className="col-span-12 lg:col-span-9 bg-white rounded-2xl flex flex-col">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
