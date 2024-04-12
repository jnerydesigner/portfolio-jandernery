import { createContext, useState, useContext } from "react";

type AppContextType = {
  changeLanguage: (choiceLanguageNumber: number) => void;
  language: number;
};

const AppContext = createContext<AppContextType>({
  changeLanguage: () => {},
  language: 0,
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<number>(0);

  const changeLanguage = (choiceLanguageNumber: number) => {
    setLanguage(choiceLanguageNumber);
  };

  return (
    <AppContext.Provider value={{ language, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
