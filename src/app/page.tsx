import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="w-[100%] h-[100vh] text-white px-12 bg-gradient-to-r from-[#818a91] to-slate-800 flex justify-center items-center flex-col gap-5">
      <p className="text-[#ff5277] text-left px-2 w-[320px] mb-[-18px] text-2xl">
        👋 Oi meu nome é
      </p>
      <h1 className="text-6xl text-center">Jander Nery</h1>

      <p className="text-justify">
        Eu sou um Desenvolvedor web que trabalha com tecnologias como React,
        Next.js, Tailwind CSS, Node.js (NestJS), Express, MongoDB, entre outras.
      </p>
      <p className="text-2xl text-center">Portfolio em Construção</p>
      <div className="flex justify-center items-center flex-row gap-3 text-white text-2xl">
        <Link
          href="https://www.youtube.com/channel/UCr5fGhSnZV7eqfDYcV09XOQ"
          target="blank"
        >
          <FaYoutube />
        </Link>
        <Link href="https://www.linkedin.com/in/jander-nery" target="blank">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/jnerydesigner" target="blank">
          <FaGithub />
        </Link>
      </div>
    </main>
  );
}
