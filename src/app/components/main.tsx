"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { Information } from "../information";
import { useAppContext } from "@/context/app.context";

import { IoIosCloudDownload } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { SocialMediaTab } from "./social-medias.tab";
import BarProjects from "../_components/bar-projects";
import { PageHome, QueryResult } from "../services";

import { RichText } from "../_components/rich-text";
import { Technologies as TechComponent } from "../_components/tecnologies";
import { ProjectTechnologies } from "./project-tecnologies";
import { Divider } from "../_components/divider";

const information = Information;

const MainPortfolio = () => {
  const [data, setData] = useState<QueryResult>();
  const { language } = useAppContext();

  useEffect(() => {
    pageData(language);
  }, [language]);

  const pageData = async (language: number) => {
    const response = await PageHome(language);

    console.log(response.pagesGenerals[0].technologies[0].techIcon);

    setData(response);
  };

  return (
    <>
      <div className="w-[100%] tablet:w-[90%] laptop:w-[80%] h-[100%] tablet:h-[80%] laptop:h-[auto] flex justify-center items-center flex-col laptop:flex-col mt-[30px] tablet:mt-8 laptop:mt-8 mb-8 bg-portfolio-color02 mx-auto">
        <div className="w-[100%] flex justify-center items-center flex-row">
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
            <div>
              <div>
                {data?.pagesGenerals[0].titleName.raw ? (
                  <RichText content={data?.pagesGenerals[0].titleName.raw} />
                ) : null}
              </div>
            </div>

            <div>
              {data?.pagesGenerals[0].introduction.raw ? (
                <RichText content={data?.pagesGenerals[0].introduction.raw} />
              ) : null}
            </div>

            <div className="grid grid-cols-10 gap-4 mt-2">
              {data?.pagesGenerals[0].technologies.map((tech) => (
                <TechComponent
                  key={tech.slug}
                  techIcon={tech.techIcon}
                  techName={tech.techName}
                />
              ))}
            </div>

            <a
              href="/curriculo_jander_da_costa_nery.pdf"
              target="_blank"
              download="Curriculo Jander Nery"
              className="w-[100%] laptop:w-[300px] h-[50px] my-6 bg-portfolio-color03 rounded-full flex justify-center items-center flex-row text-portfolio-color01 bold shadow-xl border-[1px] border-portfolio-color05 gap-4"
            >
              <span className="font-bold">
                {information?.[language]?.btn.dowloadCurriculo.title}
              </span>
              <IoIosCloudDownload className="text-[1.6rem]" />
            </a>

            <div className="w-[100%] h-[80px] laptop:h-[40px] flex justify-start items-center flex-col laptop:flex-row gap-4 text-portfolio-color03 ">
              <div className="w-[100%] laptop:w-[40%] flex justify-center laptop:justify-start items-center flex-row gap-2">
                <FaPhone className="text-[1] laptop:text-[1.4rem]" />
                <p className="text-[1rem] laptop:text-[1.4rem]">
                  (92) 99531-9977
                </p>
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
        <section className="mt-10  h-[auto] w-[90%] flex justify-center items-center flex-col">
          <div className="w-full h-[50] gradientTitleSection p-4 flex justify-center items-center rounded-xl">
            <h2 className="text-[2rem]">Technologies</h2>
          </div>
          {data?.pagesGenerals[0].technologies ? (
            <ProjectTechnologies
              tecnologies={data?.pagesGenerals[0].technologies}
            />
          ) : null}
        </section>

        <section className="mt-10  h-[auto] w-[90%] flex justify-center items-center flex-col">
          <div className="w-full h-[50] gradientTitleSection p-4 flex justify-center items-center rounded-xl">
            <h2 className="text-[2rem]">Projects</h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPortfolio;
