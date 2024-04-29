"use client";
import { motion } from "framer-motion";

import { useAppContext } from "@/context/app.context";
import { Information } from "../information";
import { IoIosSend } from "react-icons/io";

const MainContact = () => {
  const { language } = useAppContext();
  const information = Information;
  return (
    <div className="h-[90vh] w-[100%] laptop:w-[80%] flex justify-center flex-col items-center p-1 laptop:p-10">
      <div className="h-[70vh] w-[100%] laptop:w-[80%] flex justify-center flex-col items-center p-1 laptop:p-10  ">
        <motion.h2
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-4xl mb-10 text-center text-portfolio-color03 font-bold"
        >
          {information?.[language]?.contact.title}
        </motion.h2>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="w-[100%] laptop:w-[80%] h-[100%] pt-2 pb-2 laptop:h-[70%] flex justify-center items-center border border-portfolio-color04 rounded-2xl"
        >
          <form action="" className="w-[100%]  laptop:w-[100%] laptop:px-4 ">
            <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
              <label
                htmlFor="name"
                className="w-[100%] text-center  laptop:w-[30%] text-portfolio-color04 font-bold text-1xl"
              >
                {information?.[language]?.contact.form.name.title}
              </label>
              <input
                type="text"
                id="name"
                className="w-[100%] h-[40px] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02 text-portfolio-color05 placeholder:italic placeholder:text-portfolio-color04"
                placeholder={
                  information?.[language]?.contact.form.name.placeholder
                }
              />
            </div>
            <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
              <label
                htmlFor="phone"
                className="w-[100%] laptop:w-[30%] text-center  text-portfolio-color04 font-bold text-1xl "
              >
                {information?.[language]?.contact.form.phone.title}
              </label>
              <input
                type="text"
                id="phone"
                className="w-[100%] h-[40px] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02 text-portfolio-color05 placeholder:italic placeholder:text-portfolio-color04"
                placeholder={
                  information?.[language]?.contact.form.phone.placeholder
                }
              />
            </div>

            <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
              <label
                htmlFor="mail"
                className="w-[100%] laptop:w-[30%] text-center  text-portfolio-color04 font-bold text-1xl "
              >
                {information?.[language]?.contact.form.email.title}
              </label>
              <input
                type="text"
                id="mail"
                className="w-[100%] h-[40px] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02 text-portfolio-color05 placeholder:italic placeholder:text-portfolio-color04"
                placeholder={
                  information?.[language]?.contact.form.email.placeholder
                }
              />
            </div>

            <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
              <label
                htmlFor="messenger"
                className="w-[100%] laptop:w-[30%] text-center text-portfolio-color04 font-bold text-1xl "
              >
                {information?.[language]?.contact.form.message.title}
              </label>
              <textarea className="w-[100%] laptop:w-[70%] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02" />
            </div>

            <div className="flex justify-center items-center flex-row gap-4 p-2">
              <button className="w-[100%] h-[40px] text-xl bg-portfolio-color04 rounded-md flex justify-center items-center flex-row gap-4">
                <span>{information?.[language]?.contact.form.btn.title}</span>
                <IoIosSend />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default MainContact;
