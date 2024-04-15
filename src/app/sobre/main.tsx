"use client";

import { useAppContext } from "@/context/app.context";
import { Information } from "../information";

const MainAbout = () => {
  const { language } = useAppContext();
  const information = Information;
  return (
    <div className="w-[100%] tablet:h-[85vh] laptop:h-[90vh] laptop:w-[80%] flex justify-center flex-col items-center p-2 laptop:p-10">
      <div className="h-[auto] w-[100%] laptop:w-[100%] flex justify-center flex-col items-center p-10">
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

export default MainAbout;
