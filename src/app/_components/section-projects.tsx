import React, { HTMLAttributes } from "react";
import { WorkedProjects } from "../services";

interface SectionProjectsProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  projects: WorkedProjects[];
}

export const SectionProjects: React.FC<SectionProjectsProps> = ({
  title,
  projects,
  ...rest
}) => {
  console.log("projects", projects);
  return (
    <section
      className="flex justify-center items-center flex-col w-[90%] p-4 my-10"
      {...rest}
    >
      <h2 className="text-[1.8rem] font-bold text-portfolio-color02">
        {title}
      </h2>
      {projects.map((pr) => (
        <div
          key={pr.id}
          className="mb-6 flex justify-center items-center flex-col bg-portfolio-color03 w-full h-16 rounded-xl"
        >
          <h3>{pr.title}</h3>
        </div>
      ))}
    </section>
  );
};
