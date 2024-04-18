import React from "react";

interface TechProps {
  title: string;
  icon: React.ReactNode;
}

const Tech = ({ title, icon }: TechProps) => {
  return (
    <div className="gap-2 w-[auto] h-[30px] border border-portfolio-color03 bg-portfolio-color05/15 flex justify-center items-center rounded-lg text-portfolio-color04 px-2">
      {icon}
      <h1>{title}</h1>
    </div>
  );
};

export default Tech;
