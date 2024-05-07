"use client";

import { useAppContext } from "@/context/app.context";
import BarProjects from "../_components/bar-projects";
import CardProjects from "../_components/card-projects";
import {
  ICompanyWorked,
  ICompanyWorkedFather,
  ITechnology,
  QueryResult,
} from "../services";
import { useEffect, useState } from "react";
import { RichTextContent } from "@graphcms/rich-text-types";

interface CompanyWorked {
  projectWorkedId: string;
  company: string;
  companyLogo: string;
  companyUrl: string;
  projectName: string;
  tecnologies: ITechnology[];
  companyWorked: ICompanyWorked | null;
}

const MainProjects = () => {
  const [data, setData] = useState<QueryResult>();
  const [dataCompanyWorked, setDataCompanyWorked] = useState<CompanyWorked[]>(
    []
  );
  const { pageGenerals, language } = useAppContext();

  useEffect(() => {
    const pageData = async () => {
      setData(pageGenerals);
    };

    pageData();
  }, [pageGenerals, language]);

  useEffect(() => {
    const renderProjectArray = () => {
      const companyArray = pageGenerals?.pagesGenerals[0].companyWorkeds
        ? pageGenerals?.pagesGenerals[0].companyWorkeds
        : [];

      const companyWorked: CompanyWorked[] = [];

      for (const company of companyArray) {
        for (const projectWorked of company.projectWorkeds) {
          companyWorked.push({
            projectWorkedId: projectWorked.id,
            company: company.company,
            companyLogo: company.imageCompany.url,
            companyUrl: company.urlSite,
            projectName: projectWorked.name,
            tecnologies: projectWorked.technologies,
            companyWorked:
              projectWorked.companyWorked === null
                ? null
                : projectWorked.companyWorked,
          });
        }
      }

      setDataCompanyWorked(companyWorked);
    };

    renderProjectArray();
  }, [pageGenerals, language]);

  return (
    <div className="h-[auto] w-[80%] flex justify-center flex-col items-center mb-20 mt-[30px] desktop:mt-[530px]">
      <BarProjects />
      <div className="w-[80%] h-[90%] grid grid-cols-1 desktop:grid-cols-3 gap-4">
        {dataCompanyWorked.map((projectWorked) => (
          <CardProjects
            key={projectWorked.projectWorkedId}
            nameProject={projectWorked.projectName}
            imageUrlCompany={projectWorked.companyLogo}
            tecnologies={projectWorked.tecnologies}
            projectId={projectWorked.projectWorkedId}
            companyWorked={projectWorked.companyWorked}
            nameCompany={projectWorked.company}
          />
        ))}
      </div>
    </div>
  );
};

export default MainProjects;
