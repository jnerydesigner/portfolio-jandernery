import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

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
        <header className="w-[100%] h-[auto] laptop:h-[100vh] flex justify-center items-center flex-col bg-portfolio-color02">
          {children}
        </header>
      </body>
    </html>
  );
}
