"use client";
import { motion } from "framer-motion";

import { useAppContext } from "@/context/app.context";
import FormContact from "../_components/form-contact";

const MainContact = () => {
  const { pageGenerals: data } = useAppContext();
  return (
    <div className="h-[90vh] w-[100%] laptop:w-[80%] flex justify-center flex-col items-center p-1 laptop:p-10">
      <div className="h-[70vh] w-[100%] laptop:w-[80%] flex justify-center flex-col items-center p-1 laptop:p-10  ">
        <motion.h2
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-4xl mb-10 text-center text-portfolio-color03 font-bold"
        >
          {data?.pagesGenerals[0].contact.title}
        </motion.h2>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="w-[100%] laptop:w-[80%] h-[100%] pt-2 pb-2 laptop:h-[70%] flex justify-center items-center border border-portfolio-color04 rounded-2xl"
        >
          <FormContact />
        </motion.div>
      </div>
    </div>
  );
};

export default MainContact;
