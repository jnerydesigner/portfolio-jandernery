"use client";

import { useEffect, useState } from "react";

import { useAppContext } from "@/context/app.context";
import { Information } from "../information";
import { PageHome, QueryResult } from "../services";
import { RichText } from "../_components/rich-text";

const MainAbout = () => {
  const [data, setData] = useState<QueryResult>();
  const { language } = useAppContext();

  useEffect(() => {
    pageData(language);
  }, [language]);

  const pageData = async (language: number) => {
    const response = await PageHome(language);
    if (!response.pagesGenerals[0]) {
      setData(undefined);
    }

    setData(response);
  };
  return (
    <div className="w-[100%] tablet:h-[85vh] laptop:h-[90vh] laptop:w-[80%] flex justify-center flex-col items-center p-2 laptop:p-10">
      <div className="h-[auto] w-[100%] laptop:w-[100%] flex justify-center flex-col items-center p-1 laptop:p-10 ">
        <h2 className="text-4xl mb-10 text-center text-portfolio-color03 font-bold">
          {data?.pagesGenerals[0].abouts[0].title}
        </h2>

        <div>
          {data?.pagesGenerals[0].abouts?.[0].description.raw ? (
            <RichText
              content={data?.pagesGenerals[0].abouts?.[0].description.raw}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
