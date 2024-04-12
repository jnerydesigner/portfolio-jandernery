import { useAppContext } from "@/context/app.context";
import Image from "next/image";
import { Information } from "../information";

const information = Information;

const Header = () => {
  const { changeLanguage, language } = useAppContext();
  return (
    <>
      <Image
        src={"/placa.svg"}
        height={200}
        width={200}
        alt="Flag Brazil"
        className="absolute top-0 right-100 z-10"
      />
      <div className="w-[70%] h-[10vh] flex justify-center items-center flex-row  bg-portfolio-color02 relative">
        <div className="w-[90%] h-[10vh] flex justify-center items-center flex-row text-portfolio-color03 shadow-xl">
          <ul className="w-[100%] flex justify-between items-center flex-row px-10">
            <li>{information?.[language]?.titleNavigation[0].title}</li>
            <li>{information?.[language]?.titleNavigation[1].title}</li>
            <li>{information?.[language]?.titleNavigation[2].title}</li>
            <li>{information?.[language]?.titleNavigation[3].title}</li>
          </ul>
        </div>
        <div className="w-[10%] h-[10vh] flex justify-center items-center flex-row text-portfolio-color03 shadow-xl">
          <ul className="flex justify-center items-center flex-row gap-4 text-2xl font-bold">
            <li>
              <button onClick={() => changeLanguage(0)}>
                <Image
                  src={"/brasil.svg"}
                  height={32}
                  width={32}
                  alt="Flag Brazil"
                />
              </button>
            </li>
            <li>
              <button onClick={() => changeLanguage(1)}>
                <Image src={"/eua.svg"} height={32} width={32} alt="Flag EUA" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
