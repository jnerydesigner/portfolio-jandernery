import { randomUUID } from "node:crypto";

export const dataSectionProps = [
  {
    id: "15a39a27-1702-4db1-a102-fb318a09e8b7",
    language: "porfolio-en",
    company: "Companies",
    technology: "Technologies",
  },
  {
    id: "15a39a27-1702-4db1-a102-fb318a09e8b7",
    language: "porfolio-pt",
    company: "Companhia",
    technology: "Tecnologias",
  },
];

export const titleSection = (languageNumber: number) => {
  const language: string = languageNumber === 1 ? "porfolio-en" : "porfolio-pt";
  const findSections = dataSectionProps.find(
    (section) => section.language === language
  );

  return findSections;
};
