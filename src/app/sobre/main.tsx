"use client";

import { motion } from "framer-motion";
import { useAppContext } from "@/context/app.context";

import { RichText } from "../_components/rich-text";

const MainAbout = () => {
  const { pageGenerals: data } = useAppContext();
  return (
    <div className="w-[100%] tablet:h-[85vh] laptop:h-[90vh] laptop:w-[80%] flex justify-center flex-col items-center p-2 laptop:p-10">
      <div className="h-[auto] w-[100%] laptop:w-[100%] flex justify-center flex-col items-center p-1 laptop:p-10 ">
        <motion.h2
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-4xl mb-10 text-center text-portfolio-color03 font-bold"
        >
          {data?.pagesGenerals[0].abouts[0].title}
        </motion.h2>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {data?.pagesGenerals[0].abouts?.[0].description.raw ? (
            <RichText
              content={data?.pagesGenerals[0].abouts[0].description.raw}
            />
          ) : null}
        </motion.div>
      </div>
    </div>
  );
};

export default MainAbout;
