import { useAppContext } from "@/context/app.context";
import { Information } from "../information";

const FooterPortfolio = () => {
  const information = Information;
  const { changeLanguage, language } = useAppContext();
  return (
    <div className="w-[100%] laptop:w-[80%] h-[60px] bg-portfolio-color02 flex justify-center items-center flex-row drop-shadow-top">
      <h2 className="text-portfolio-color03 text-sm text-center">
        {information?.[language]?.footer?.message}
      </h2>
    </div>
  );
};

export default FooterPortfolio;
