"use client";

import Image from "next/image";
import { Information } from "../information";
import { useAppContext } from "@/context/app.context";

import { IoIosCloudDownload } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const information = Information;

const MainPortfolio = () => {
  const { language } = useAppContext();

  return (
    <div className="w-[70%] h-[80vh] flex justify-center items-center flex-row bg-portfolio-color02">
      <div className="w-[100%] h-[400px] flex justify-center items-center">
        <div className="w-[90%] h-[400px]">
          <div className="h-[50px] flex justify-start items-center flex-row mb-8 gap-4">
            <p className="text-[4rem] text-portfolio-color03">
              {information?.[language]?.salutation?.title}
            </p>
            <p className="text-[4rem]">
              {information?.[language]?.salutation?.message}
            </p>
          </div>
          <h2 className="w-[100%] text-[6rem] text-portfolio-color04 flex justify-start items-center flex-row">
            <span className="bold text-portfolio-color04">
              {information?.[language]?.personal.title}
            </span>
            <div>
              <span className="bold text-portfolio-color03 ml-4">
                {information?.[language]?.personal.message}
              </span>
            </div>
          </h2>
          <p className="text-[1.2rem] text-portfolio-color04">
            {information?.[language]?.skill?.title}
          </p>

          <div className="w-[90%] h-[100px] mt-4 border  border-portfolio-color03 bg-portfolio-color01 flex justify-center items-center rounded-2xl p-2">
            <p className="text-[1.4rem] text-portfolio-color04">
              {information?.[language]?.skill?.message}
            </p>
          </div>

          <a
            href="/curriculo_jander_da_costa_nery.pdf"
            target="_blank"
            download="Curriculo Jander Nery"
            className="w-[300px] h-[50px] my-6 bg-portfolio-color03 rounded-full flex justify-center items-center flex-row text-portfolio-color01 bold shadow-xl border-[1px] border-portfolio-color05 gap-4"
          >
            <span className="font-bold">Download Curriculo</span>
            <IoIosCloudDownload className="text-[1.6rem]" />
          </a>

          <div className="w-[100%] h-[40px] flex justify-start items-center flex-row gap-4 text-portfolio-color03">
            <div className="w-[25%] flex justify-start items-center flex-row gap-2">
              <FaPhone className="text-[1.4rem]" />
              <p className="text-[1.4rem]">(92) 99531-9977</p>
            </div>

            <div className="w-[35%] flex justify-start items-center flex-row gap-2">
              <MdMailOutline className="text-[1.6rem]" />
              <p className="text-[1.4rem]">jander.webmaster@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[400px]  flex justify-center items-center">
          <div className="w-[90%] h-[75%] rounded-full flex justify-center items-center bg-portfolio-color03 shadow-xl">
            <Image
              src="/foto_jander.png"
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
