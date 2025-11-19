import { useAppContext } from "@/context/app.context";
import { Information } from "../information";

const languageFooter = {
  "porfolio-pt": "© 2025 Se Liga Dev. Todos os direitos reservados.",
  "porfolio-en": "© 2025 Se Liga Dev. All rights reserved.",
};

const FooterPortfolio = () => {
  const information = Information;
  const { changeLanguage, language } = useAppContext();

  console.log("Context Langae" + language);
  return (
    <div className="w-[100%] laptop:w-[80%] h-[80px] bg-portfolio-color02 flex justify-center items-center flex-row drop-shadow-top">
      <h2 className="text-portfolio-color03 text-sm text-center">
        {information?.[language]?.footer?.message}
      </h2>
    </div>
  );
};

export default FooterPortfolio;
