"use client";

import { useAppContext } from "@/context/app.context";
import { Information } from "../(portfolio)/information";

const MainProjects = () => {
  const { language } = useAppContext();
  const information = Information;
  return (
    <div className="h-[90vh] w-[80%] flex justify-center flex-col items-center p-10">
      <div className="h-[70vh] w-[50%] flex justify-center flex-col items-center p-10">
        <h2 className="text-4xl mb-10 text-center text-portfolio-color03 font-bold">
          {information?.[language]?.about.title}
        </h2>
        <p className="text-xl mb-10 text-justify text-portfolio-color04">
          {information?.[language]?.about.message}
        </p>
      </div>
    </div>
  );
};

export default MainProjects;
