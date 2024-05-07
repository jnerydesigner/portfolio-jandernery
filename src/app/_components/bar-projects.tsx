"use client";

import { useAppContext } from "@/context/app.context";
import { Information } from "../information";

const BarProjects = () => {
  const information = Information;
  const { language } = useAppContext();
  return (
    <div className="h-[17%] w-[100%] desktop:w-[1200px]  border border-portfolio-color03 rounded-lg flex justify-between items-center flex-col desktop:flex-row px-20 mt-6 mb-4">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-[3.2rem] font-bold text-portfolio-color03">
          {information[language].barProjects?.[0].title}
        </h2>
        <p className="text-2xl text-portfolio-color04">
          {information[language].barProjects?.[0].message}
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        <h2 className="text-[3.2rem] font-bold text-portfolio-color03">
          {information[language].barProjects?.[1].title}
        </h2>
        <p className="text-2xl text-portfolio-color04">
          {information[language].barProjects?.[1].message}
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        <h2 className="text-[3.2rem] font-bold text-portfolio-color03">
          {information[language].barProjects?.[2].title}
        </h2>
        <p className="text-2xl text-portfolio-color04">
          {information[language].barProjects?.[2].message}
        </p>
      </div>
    </div>
  );
};

export default BarProjects;
