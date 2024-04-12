import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <header className="w-[100%] h-[100vh] flex justify-start items-center flex-col bg-portfolio-color02">
          {children}
        </header>
      </body>
    </html>
  );
}
