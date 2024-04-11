import Image from "next/image";

const MainPortfolio = () => {
  return (
    <div className="w-[70%] h-[80vh] flex justify-center items-center flex-row bg-portfolio-color02">
      <div className="w-[100%] h-[400px] flex justify-center items-center">
        <div className="w-[90%] h-[400px]">
          <div className="h-[50px] flex justify-start items-center flex-row mb-8 gap-4">
            <p className="text-[4rem] text-portfolio-color03">Olá</p>
            <p className="text-[4rem]">🖐️</p>
          </div>
          <h2 className="text-[6rem] text-portfolio-color04">
            Eu sou
            <span className="bold text-portfolio-color03 ml-3">
              Jander Nery
            </span>
          </h2>
          <p className="text-[1.2rem] text-portfolio-color04">
            Eu sou um Desenvolvedor web que trabalha com tecnologias como React,
            Next.js, Tailwind CSS, Node.js (NestJS), Express, MongoDB, entre
            outras.
          </p>
        </div>
        <div className="w-[30%] h-[400px]  flex justify-center items-center">
          <div className="w-[90%] h-[75%] rounded-full flex justify-center items-center bg-portfolio-color03">
            <Image
              src="/foto-jander.png"
              alt="Jander Nery"
              width={200}
              height={200}
              className="w-[95%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPortfolio;
