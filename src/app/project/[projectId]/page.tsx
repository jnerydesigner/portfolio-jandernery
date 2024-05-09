"use client";

import {
  IProject,
  IProjectWorked,
  SearchPageProject,
} from "@/app/services/search-projects";
import { useAppContext } from "@/context/app.context";
import { useEffect, useState } from "react";

interface Props {
  params: { projectId: string };
}

export default function ProjectDetails({ params }: Props) {
  const [data, setData] = useState<IProject>();

  const { language, pageGenerals } = useAppContext();

  useEffect(() => {
    pageProjectData(params.projectId, language);
  }, [language, params.projectId]);

  const pageProjectData = async (projectId: string, language: number) => {
    const response = await SearchPageProject(projectId, language);

    setData(response);
  };

  return (
    <div className="w-[80%] h-[500px] bg-portfolio-color05 grid grid-rows-3 gap-4 items-center my-2">
      <div className="flex justify-center items-center flex-row h-[50px] bg-portfolio-color01">
        Barra de navegação
      </div>

      <h1>Project: {params.projectId}</h1>
      <p>{data?.projectWorked.id}</p>
    </div>
  );
}
