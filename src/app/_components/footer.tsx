"use client";

import { useAppContext } from "@/context/app.context";

const languageFooter = [
  "© 2025 Se Liga Dev. Todos os direitos reservados.",
  "© 2025 Se Liga Dev. All rights reserved.",
];

export const Footer = () => {
  const { language } = useAppContext();
  return (
    <div className="w-full h-[60px] flex justify-center items-center bg-portfolio-color02 fixed bottom-0 left-0 z-50 shadow-md">
      <p className="text-center text-sm text-portfolio-color04">
        {languageFooter[language]}
      </p>
    </div>
  );
};
