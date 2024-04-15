"use client";

import { useAppContext } from "@/context/app.context";
import { Information } from "../(portfolio)/information";
import { IoIosSend } from "react-icons/io";

const MainContact = () => {
  const { language } = useAppContext();
  const information = Information;
  return (
    <div className="h-[90vh] w-[80%] flex justify-center flex-col items-center p-10">
      <div className="h-[70vh] w-[80%] flex justify-center flex-col items-center p-10  ">
        <h2 className="text-4xl mb-10 text-center text-portfolio-color03 font-bold">
          {information?.[language]?.contact.title}
        </h2>

        <div className="w-[80%] h-[70%] flex justify-center items-center border border-portfolio-color04 rounded-2xl">
          <form action="" className="w-[50%] px-4 b">
            <div className="flex justify-center items-center flex-row gap-4 p-2">
              <label
                htmlFor="name"
                className="w-[30%] text-portfolio-color04 font-bold text-1xl"
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
            <div className="flex justify-center items-center flex-row gap-4 p-2">
              <label
                htmlFor="phone"
                className="w-[30%] text-portfolio-color04 font-bold text-1xl "
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

            <div className="flex justify-center items-center flex-row gap-4 p-2">
              <label
                htmlFor="mail"
                className="w-[30%] text-portfolio-color04 font-bold text-1xl "
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

            <div className="flex justify-center items-center flex-row gap-4 p-2">
              <label
                htmlFor="messenger"
                className="w-[30%] text-portfolio-color04 font-bold text-1xl "
              >
                {information?.[language]?.contact.form.message.title}
              </label>
              <textarea className="w-[70%] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02" />
            </div>

            <div className="flex justify-center items-center flex-row gap-4 p-2">
              <button className="w-[100%] h-[40px] text-xl bg-portfolio-color04 rounded-md flex justify-center items-center flex-row gap-4">
                <span>{information?.[language]?.contact.form.btn.title}</span>
                <IoIosSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
