import Image from "next/image";

const Header = () => {
  return (
    <>
      <Image
        src={"/placa.svg"}
        height={150}
        width={150}
        alt="Flag Brazil"
        className="absolute top-0 right-100 z-10"
      />
      <div className="w-[70%] h-[10vh] flex justify-center items-center flex-row  bg-portfolio-color02 relative">
        <div className="w-[90%] h-[10vh] flex justify-center items-center flex-row text-portfolio-color03 shadow-xl">
          <ul className="w-[100%] flex justify-between items-center flex-row px-10">
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Projetos</li>
          </ul>
        </div>
        <div className="w-[10%] h-[10vh] flex justify-center items-center flex-row text-portfolio-color03 shadow-xl">
          <ul className="flex justify-center items-center flex-row gap-4 text-2xl font-bold">
            <li>
              <Image
                src={"/brasil.svg"}
                height={32}
                width={32}
                alt="Flag Brazil"
              />
            </li>
            <li>
              <Image src={"/eua.svg"} height={32} width={32} alt="Flag EUA" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
