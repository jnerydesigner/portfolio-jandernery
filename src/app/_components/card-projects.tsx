import Image from "next/image";
import Tech from "./tech";

import { TbBrandNodejs } from "react-icons/tb";
import { ICompanyWorked, ITechnology } from "../services";
import { GetMostFrequentLetters } from "../utils/create-two-letters-plus-quantity";

interface CardProjectsProps {
  nameProject: string;
  imageUrlCompany: string;
  projectId: string;
  tecnologies: ITechnology[];
  companyWorked: ICompanyWorked | null;
  nameCompany: string;
}

const CardProjects = ({
  nameProject,
  imageUrlCompany,
  tecnologies,
  companyWorked,
  nameCompany,
}: CardProjectsProps) => {
  const letter = GetMostFrequentLetters(nameProject);

  return (
    <div className="h-[auto] w-[100%] desktop:w-[350px] flex justify-center items-center flex-col p-2 border border-portfolio-color03 rounded-xl">
      <div className="w-[100%] mb-2 flex justify-center items-center bg-portfolio-color04 h-[100px] rounded-xl border border-portfolio-color05 relative">
        <div className="p-2 bg-portfolio-color04 flex justify-center items-center">
          <Image
            src={imageUrlCompany}
            alt={nameProject}
            width={200}
            height={200}
            className="w-[60%] mb-2"
            priority
          />
        </div>
      </div>
      <h1 className="text-center text-portfolio-color04 text-[1.6rem] font-bold">
        {`${nameCompany}`}
      </h1>

      <div className="flex justify-center items-center w-[70%] h-[200px] bg-portfolio-color04 rounded-lg border-[3px] border-portfolio-color03 shadow-lg my-2">
        <h2 className="text-[5rem]">{letter}</h2>
      </div>
      <h1 className="text-center text-portfolio-color04 text-[1.6rem] font-bold">
        {nameProject}
      </h1>
      {/* <RichText key={projectId} content={description.raw} /> */}
      <div className="grid grid-cols-3 gap-4">
        {tecnologies?.map((tech) => (
          <Tech
            key={tech.id}
            title={tech.techName}
            icon={<TbBrandNodejs />}
            iconSvg={tech.techIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default CardProjects;
