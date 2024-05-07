"use client";

import { PageHome, QueryResult } from "@/app/services";
import { createContext, useState, useContext, useEffect } from "react";

type AppContextType = {
  changeLanguage: (choiceLanguageNumber: number) => void;
  language: number;
  pageGenerals: QueryResult | undefined;
};

const AppContext = createContext<AppContextType>({
  changeLanguage: () => {},
  language: 0,
  pageGenerals: undefined,
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<number>(1);
  const [pageGenerals, setPageGenerals] = useState<QueryResult>();

  useEffect(() => {
    pageData(language);
  }, [language]);

  const pageData = async (language: number) => {
    const response = await PageHome(language);

    setPageGenerals(response);
  };

  const changeLanguage = (choiceLanguageNumber: number) => {
    setLanguage(choiceLanguageNumber);
  };

  return (
    <AppContext.Provider value={{ language, changeLanguage, pageGenerals }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
