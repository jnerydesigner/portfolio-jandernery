import { Metadata } from "next";
import "../styles/globals.css";

import { Roboto } from "next/font/google";
import { WrapperClient } from "../components/wrapper-client";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio de Jander Nery - Página de Contato",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={roboto.className}>
        <header className="w-[100%] h-[auto] laptop:h-[100vh] flex justify-center items-center flex-col bg-portfolio-color02">
          <WrapperClient>{children}</WrapperClient>
        </header>
      </body>
    </html>
  );
}
