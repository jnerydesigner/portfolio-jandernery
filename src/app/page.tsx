import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%] h-[100vh] px-12 bg-gradient-to-r from-slate-600 to-slate-800 flex justify-center items-center flex-col gap-5">
      <h1 className="text-8xl text-white text-center">Jander Nery</h1>

      <p className="text-white text-justify">
        Esse é o Portfolio de Jander Nery, um desenvolvedor web que trabalha com
        tecnologias como React, Next.js, Tailwind CSS, Node.js (NestJS),
        Express, MongoDB, entre outras.
      </p>
      <p className="text-white text-4xl text-center">Portfolio em Construção</p>
    </main>
  );
}
