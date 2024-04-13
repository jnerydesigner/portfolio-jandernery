import { Metadata } from "next";
import "../styles/globals.css";

import { Roboto } from "next/font/google";
import { AppWrapper } from "@/context/app.context";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio de Jander Nery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <header className="w-[100%] h-[auto] laptop:h-[100vh] flex justify-center items-center flex-col bg-portfolio-color02">
          {children}
        </header>
      </body>
    </html>
  );
}
