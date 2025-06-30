"use client";

import { PageHome, QueryResult } from "@/app/services";
import { titleSection } from "@/data/title-section";
import { createContext, useState, useContext, useEffect } from "react";

type AppContextType = {
  changeLanguage: (choiceLanguageNumber: number) => void;
  language: number;
  pageGenerals: QueryResult | undefined;
  languageSection: {
    id: string;
    language: string;
    company: string;
    technology: string;
  };
};

const AppContext = createContext<AppContextType>({
  changeLanguage: () => {},
  language: 0,
  pageGenerals: undefined,
  languageSection: {
    id: "15a39a27-1702-4db1-a102-fb318a09e8b7",
    language: "porfolio-en",
    company: "Companies",
    technology: "Technologies",
  },
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<number>(1);
  const [pageGenerals, setPageGenerals] = useState<QueryResult>();
  const [languageSection, setLanguageSection] = useState({
    id: "15a39a27-1702-4db1-a102-fb318a09e8b7",
    language: "porfolio-en",
    company: "Companies",
    technology: "Technologies",
  });

  useEffect(() => {
    pageData(language);
  }, [language]);

  const pageData = async (language: number) => {
    const response = await PageHome(language);

    setPageGenerals(response);
  };

  const changeLanguage = (choiceLanguageNumber: number) => {
    const resLanguageSection = titleSection(choiceLanguageNumber);
    if (!resLanguageSection) {
      throw new Error();
    }
    setLanguageSection(resLanguageSection);
    setLanguage(choiceLanguageNumber);
  };

  return (
    <AppContext.Provider
      value={{ language, changeLanguage, pageGenerals, languageSection }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
