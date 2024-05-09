import Image from "next/image";
import Tech from "./tech";

import { TbBrandNodejs } from "react-icons/tb";
import { ICompanyWorked, ITechnology } from "../services";
import { GetMostFrequentLetters } from "../utils/create-two-letters-plus-quantity";
import Link from "next/link";

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
  projectId,
}: CardProjectsProps) => {
  const letter = GetMostFrequentLetters(nameProject);

  return (
    <div className="h-[auto] w-[90%] desktop:w-[100%] flex justify-center items-center flex-col p-2 border border-portfolio-color03 rounded-xl">
      <div className="w-[100%] mb-2 flex justify-center items-center h-[100px] rounded-xl relative">
        <div className="p-2 w-[100%] h-[100%] flex justify-center items-center bg-portfolio-color04 rounded-xl border-[2px] border-portfolio-color05">
          <Image
            src={imageUrlCompany}
            alt={nameProject}
            width={200}
            height={200}
            className="w-[50%] mb-2"
            priority
          />
        </div>
      </div>
      <h1 className="text-center text-portfolio-color04 text-[1.4rem] font-bold">
        {`${nameCompany}`}
      </h1>

      <div className="flex justify-center items-center w-[200px] h-[200px] bg-portfolio-color04 rounded-full border-[3px] border-portfolio-color03 shadow-lg my-2">
        <h2 className="text-[5rem]">{letter}</h2>
      </div>
      <h1 className="text-center text-portfolio-color04 text-[1.2rem] font-bold">
        <Link href={`/project/${projectId}`}>{nameProject}</Link>
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
