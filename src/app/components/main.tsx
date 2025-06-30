"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { Information } from "../information";
import { useAppContext } from "@/context/app.context";

import { IoIosCloudDownload } from "react-icons/io";

import { SocialMediaTab } from "./social-medias.tab";
import BarProjects from "../_components/bar-projects";
import { IProjectTecnologies, PageHome, QueryResult } from "../services";

import { RichText } from "../_components/rich-text";
import { Technologies as TechComponent } from "../_components/tecnologies";
import { ProjectTechnologies } from "./project-tecnologies";
import { CmsIcon } from "../services/cms-icon";
import { substitutionStrinHW } from "../utils/svg-height-width";
import Section from "../_components/section.component";
import CardProjects from "../_components/card-projects";
import CardProjectCoponent from "../_components/card-projects.component";
import SectionTecnologies from "../_components/section-tecnologies";
import PictureView from "../_components/picture-view";
import { DownloadCurriculo } from "../_components/download-curriculo";
import Link from "next/link";
import { TransformNumberPhoneInInternational } from "../utils/transform-number-tel-format-international";
import SectionCompanies from "../_components/section-companies";

const information = Information;

const MainPortfolio = () => {
  const [data, setData] = useState<QueryResult>();
  const { language, pageGenerals, languageSection } = useAppContext();

  useEffect(() => {
    pageData(language);
  }, [language]);

  const pageData = async (language: number) => {
    const response = await PageHome(language);

    setData(response);
  };

  return (
    <>
      <div className="w-[100%] tablet:w-[90%] laptop:w-[80%] h-[100%] tablet:h-[80%] laptop:h-[auto] flex justify-center items-center flex-col laptop:flex-col mt-[30px] tablet:mt-8 laptop:mt-8 mb-8 bg-portfolio-color02 mx-auto">
        <div className="w-[100%] flex justify-center items-center flex-col desktop:flex-row">
          <div className="w-[100%] laptop:w-[25%] h-[100%] flex justify-between items-center flex-col mt-0 laptop:mt-2 p-1 mx-2 ">
            {data?.pagesGenerals[0].profilePicture.url ? (
              <PictureView pagesGenerals={data?.pagesGenerals[0]} />
            ) : null}

            <div className="w-[90%] bg-portfolio-color03 mt-4 flex justify-center items-center flex-col p-2 rounded-xl">
              {data?.pagesGenerals[0].socialMedias ? (
                <SocialMediaTab
                  socialMedias={data?.pagesGenerals[0].socialMedias}
                />
              ) : null}
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
            <div className="grid grid-cols-4 tablet:col-8 desktop:col-10 gap-4 mt-2">
              {data?.pagesGenerals[0].technologies.map((tech) => (
                <TechComponent
                  id={tech.id}
                  key={tech.slug}
                  techIcon={tech.techIcon}
                  techName={tech.techName}
                  techIconColor="#2c3e50"
                />
              ))}
            </div>

            <div className="w-full flex justify-center items-center">
              <DownloadCurriculo
                title={information?.[language]?.btn.downloadCurriculo.title}
              />
            </div>
            {/* https://wa.me/<número></número> */}

            <div className="w-[100%] h-[80px] laptop:h-[40px] flex justify-start items-center flex-col laptop:flex-row gap-4 text-portfolio-color03 ">
              <div className="w-[100%] laptop:w-[40%] flex justify-center laptop:justify-start items-center flex-row gap-2">
                <Link
                  href={`https://wa.me/${
                    data?.pagesGenerals[0].personalDatas[0].description &&
                    TransformNumberPhoneInInternational(
                      data?.pagesGenerals[0].personalDatas[0].description
                    )
                  }`}
                  className="w-full flex justify-center items-center gap-4"
                  target="_blank"
                >
                  {data?.pagesGenerals[0].personalDatas[0]
                    .svgIconPersonalData ? (
                    <CmsIcon
                      icon={substitutionStrinHW(
                        "1.5rem",
                        "1.5rem",
                        data?.pagesGenerals[0].personalDatas[0]
                          .svgIconPersonalData
                      )}
                    />
                  ) : null}
                  <p className="text-[1rem] laptop:text-[1.4rem]">
                    {data?.pagesGenerals[0].personalDatas[0].description}
                  </p>
                </Link>
              </div>

              <div className="w-[100%] laptop:w-[40%] flex justify-center laptop:justify-start items-center flex-row gap-2">
                {data?.pagesGenerals[0].personalDatas[1].svgIconPersonalData ? (
                  <CmsIcon
                    icon={substitutionStrinHW(
                      "2rem",
                      "2rem",
                      data?.pagesGenerals[0].personalDatas[1]
                        .svgIconPersonalData
                    )}
                  />
                ) : null}

                <p className="text-[1rem] laptop:text-[1.4rem]">
                  {data?.pagesGenerals[0].personalDatas[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Section title="Projects">
          {data?.pagesGenerals[0].projectTecnologies
            ? data?.pagesGenerals[0].projectTecnologies.map((project) => (
                <CardProjectCoponent key={project.id} project={project} />
              ))
            : null}
        </Section> */}

        <SectionCompanies
          title={languageSection.company}
          companies={data?.pagesGenerals?.[0]?.companyWorkeds || []}
        />

        <SectionTecnologies title={languageSection.technology}>
          <div className="h-[auto] w-[90%] flex justify-center items-center flex-col">
            {data?.pagesGenerals[0].technologies ? (
              <ProjectTechnologies
                tecnologies={data?.pagesGenerals[0].technologies}
                languageSection={languageSection.language}
              />
            ) : null}
          </div>
        </SectionTecnologies>
      </div>
    </>
  );
};

export default MainPortfolio;
