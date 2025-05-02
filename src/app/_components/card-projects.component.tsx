"use client";
import { useEffect, useState } from "react";

import { RichTextContent } from "@graphcms/rich-text-types";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";
import { ITechnology } from "../services";

interface IProjectTecnologies {
  id: string;
  title: string;
  description: {
    raw: RichTextContent;
    text: string;
  };
  imageProject: {
    url: string;
  };

  textDescription?: string;
  technologies: ITechnology[];
}

interface CardProjectProps {
  project: IProjectTecnologies;
}

const CardProjectCoponent: React.FC<CardProjectProps> = ({ project }) => {
  const [projectInput, setProjectInput] = useState<IProjectTecnologies>();

  useEffect(() => {
    const limitedRichText = (project: IProjectTecnologies) => {
      const desc = processarTexto(project.description.text);
      project.textDescription = desc;
      setProjectInput(project);
    };

    limitedRichText(project);
  }, [project, setProjectInput]);

  function processarTexto(texto: string) {
    let textoFinal: string = "";
    const indiceVirgula = texto.indexOf(",");

    textoFinal = texto.substring(indiceVirgula + 1);

    textoFinal = textoFinal.replace(/\n/g, " ");
    textoFinal = textoFinal.trim();
    textoFinal = textoFinal.charAt(0).toUpperCase() + textoFinal.slice(1);
    textoFinal = textoFinal.slice(0, 100) + " ...";

    return textoFinal;
  }

  return (
    <>
      <div className="card max-w-sm p-6 bg-portfolio-color03 border-[2px] border-portfolio-color04 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200 flex justify-center items-center flex-col">
        <div className="w-[80%] flex justify-center items-center rounded-xl shadow-lg mb-4">
          <Image
            src={project.imageProject.url}
            width={200}
            height={200}
            alt={projectInput?.title ? projectInput?.title : "Project"}
            className="w-[100%] rounded-xl"
          />
        </div>
        {projectInput ? (
          <a
            href={`/project/${projectInput?.id}`}
            data-tooltip-id={projectInput?.id}
            data-tooltip-content={`Navegar até ${projectInput?.title}`}
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {projectInput?.title}
            </h5>
          </a>
        ) : null}

        <ReactTooltip id={projectInput?.id} />

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {projectInput?.textDescription}
        </p>
        <a
          href={`/project/${projectInput?.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          data-tooltip-id={projectInput?.id}
          data-tooltip-content={`Navegar até ${projectInput?.title}`}
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        {/* <p>Tecnologias</p>
        {projectInput?.technologies ? (
          <TechDesc tech={projectInput?.technologies} />
        ) : null} */}
      </div>
    </>
  );
};

export default CardProjectCoponent;
