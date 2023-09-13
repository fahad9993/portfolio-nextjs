import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Main from "./Main";

// const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: " %s | Md. Fahad Rahman | Portfolio",
    default: "Md. Fahad Rahman | Portfolio",
  },
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
        className={`${inter.className} bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white`}
      >
        <Main>{children}</Main>
      </body>
    </html>
  );
}
