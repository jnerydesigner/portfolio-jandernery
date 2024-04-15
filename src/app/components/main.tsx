"use client";

import Image from "next/image";
import { Information } from "../information";
import { useAppContext } from "@/context/app.context";

import { IoIosCloudDownload } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { SocialMediaTab } from "./social-medias.tab";

const information = Information;

const MainPortfolio = () => {
  const { language } = useAppContext();

  return (
    <div className="w-[100%] tablet:w-[90%] laptop:w-[80%] h-[100%] tablet:h-[80%] flex justify-center items-center flex-col laptop:flex-row mt-[30px] tablet:mt-8 laptop:mt-8 mb-8 bg-portfolio-color02">
      <div className="w-[100%] laptop:w-[25%] h-[320px] flex justify-center items-center mt-0 laptop:mt-2 p-1 mx-2">
        <div className="w-[260px] tablet:w:[260px] laptop:w:[330px] rounded-full flex justify-center items-center drop-shadow-total ">
          <Image
            src="/foto_jander.png"
            alt="Jander Nery"
            width={200}
            height={200}
            className="w-[100%] rounded-full"
          />
        </div>
      </div>
      <div className="w-[100%] laptop:w-[70%] h-[80%] px-4 laptop:mt-4">
        <div className="h-[50px] flex justify-start items-center flex-row mb-2 gap-4">
          <p className="text-[2rem] text-portfolio-color03 laptop:text-[4rem] tablet:text-[3rem]">
            {information?.[language]?.salutation?.title}
          </p>
          <p className="text-[2rem] laptop:text-[4rem] tablet:text-[3rem]">
            {information?.[language]?.salutation?.message}
          </p>
        </div>
        <h2 className="w-[100%] text-[2rem] tablet:text-[3rem] laptop:text-[4rem] text-portfolio-color04 flex justify-start items-center flex-row">
          <span className="bold text-portfolio-color04">
            {information?.[language]?.personal.title}
          </span>
          <div>
            <span className="bold text-portfolio-color03 ml-4">
              {information?.[language]?.personal.message}
            </span>
          </div>
        </h2>
        <p className="text-[1rem] laptop:text-[1.2rem] text-portfolio-color04">
          {information?.[language]?.skill?.title}
        </p>

        <div className="w-[100%] laptop:w-[90%] h-[130px] mt-4 border  border-portfolio-color03 flex justify-center items-center rounded-2xl p-2 py-5">
          <p className="text-[1.2rem] text-center laptop:text-justify laptop:text-[1.4rem] text-portfolio-color04">
            {information?.[language]?.skill?.message}
          </p>
        </div>

        <a
          href="/curriculo_jander_da_costa_nery.pdf"
          target="_blank"
          download="Curriculo Jander Nery"
          className="w-[100%] laptop:w-[300px] h-[50px] my-6 bg-portfolio-color03 rounded-full flex justify-center items-center flex-row text-portfolio-color01 bold shadow-xl border-[1px] border-portfolio-color05 gap-4"
        >
          <span className="font-bold">Download Curriculo</span>
          <IoIosCloudDownload className="text-[1.6rem]" />
        </a>

        <div className="w-[100%] h-[80px] laptop:h-[40px] flex justify-start items-center flex-col laptop:flex-row gap-4 text-portfolio-color03 ">
          <div className="w-[100%] laptop:w-[40%] flex justify-center laptop:justify-start items-center flex-row gap-2">
            <FaPhone className="text-[1] laptop:text-[1.4rem]" />
            <p className="text-[1rem] laptop:text-[1.4rem]">(92) 99531-9977</p>
          </div>

          <div className="w-[100%] laptop:w-[40%] flex justify-center laptop:justify-start items-center flex-row gap-2">
            <MdMailOutline className="text-[1] laptop:text-[1.4rem]" />
            <p className="text-[1rem] laptop:text-[1.4rem]">
              jander.webmaster@gmail.com
            </p>
          </div>
        </div>
        <div className="my-10 flex justify-center items-center">
          <SocialMediaTab />
        </div>
      </div>
    </div>
  );
};

export default MainPortfolio;
