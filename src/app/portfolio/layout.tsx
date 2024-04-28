import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { WrapperClient } from "../components/wrapper-client";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio de Jander Nery - Página Inicial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={roboto.className}>
        <header className="w-[100%] h-[auto] laptop:h-[auto] grid grid-cols-1 bg-portfolio-color02">
          <WrapperClient>{children}</WrapperClient>
        </header>
      </body>
    </html>
  );
}
