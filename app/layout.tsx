import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
