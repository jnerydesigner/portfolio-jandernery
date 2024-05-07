import React from "react";
import { CmsIcon } from "../services/cms-icon";

interface TechProps {
  title: string;
  icon: React.ReactNode;
  iconSvg?: string;
}

const Tech = ({ title, icon, iconSvg }: TechProps) => {
  return (
    <div className="gap-2 w-[auto] h-[60px] border border-portfolio-color03 bg-portfolio-color05/15 flex justify-center items-center flex-col rounded-lg text-portfolio-color04 px-2">
      {iconSvg ? <CmsIcon icon={iconSvg} /> : null}
      <h1 className="text-[0.9rem]">{title}</h1>
    </div>
  );
};

export default Tech;
