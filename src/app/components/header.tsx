import { useAppContext } from "@/context/app.context";
import Image from "next/image";
import { Information } from "../information";
import Link from "next/link";

const information = Information;

const Header = () => {
  const { changeLanguage, language } = useAppContext();

  return (
    <>
      <Image
        src={"/placa.svg"}
        height={200}
        width={200}
        priority
        alt="Flag Brazil"
        className="absolute top-0 right-[0px] laptop:right-100 z-10 w-[150px] tablet:right-[100px] tablet:w-[200px] laptop:w-[150px] laptop:right-[0px]"
      />
      <div className="w-[100%] tablet:w-[100%] laptop:w-[80%] h-[260px] tablet:h-[10vh] flex justify-center items-center flex-col tablet:flex-row  bg-portfolio-color02 relative drop-shadow-bottom mx-auto">
        <div className="w-[90% tablet:w-[100%] h-[200px] laptop:w-[80%] tablet:h-[10vh] flex justify-center items-center flex-col tablet:flex-row text-portfolio-color03 ">
          <ul className="w-[100%] tablet:w-[80%] flex justify-between items-center flex-col tablet:flex-row tablet:px-10 gap-2">
            <li className="w-full h-10 flex justify-center items-center">
              <Link href="/portfolio">
                {information?.[language]?.titleNavigation[0].title}
              </Link>
            </li>
            <li className="w-full h-10 flex justify-center items-center">
              <Link href="/sobre">
                {information?.[language]?.titleNavigation[1].title}
              </Link>
            </li>
            <li className="w-full h-10 flex justify-center items-center">
              <Link href="/contato">
                {information?.[language]?.titleNavigation[2].title}
              </Link>
            </li>
            <li className="w-full h-10 flex justify-center items-center">
              <Link href="/projetos">
                {information?.[language]?.titleNavigation[3].title}
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[100%] tablet:w-[20%] laptop:w-[20%] h-[60px] tablet:h-[10vh]  flex justify-center items-center flex-row ">
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
