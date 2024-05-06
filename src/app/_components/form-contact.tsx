"use client";

import axios from "axios";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const contactFormSchema = z.object({
  name: z.string(),
  phone: z.string(),
  mail: z.string(),
  messenger: z.string(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

import { IoIosSend } from "react-icons/io";

const FormContact: React.FC = () => {
  const { handleSubmit, register, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitFunction = async (data: ContactFormData) => {
    console.log("HookFormData", data);

    try {
      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        reset();
      }
    } catch {
      console.log("Erro ao enviar mensagem");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="w-[100%]  laptop:w-[100%] laptop:px-4 "
    >
      <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
        <label
          htmlFor="name"
          className="w-[100%] text-center  laptop:w-[30%] text-portfolio-color04 font-bold text-1xl"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="w-[100%] h-[40px] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02 text-portfolio-color05 placeholder:italic placeholder:text-portfolio-color04"
          placeholder="Informe seu Nome"
          {...register("name")}
        />
      </div>
      <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
        <label
          htmlFor="phone"
          className="w-[100%] laptop:w-[30%] text-center  text-portfolio-color04 font-bold text-1xl "
        >
          Telefone
        </label>
        <input
          type="text"
          id="phone"
          className="w-[100%] h-[40px] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02 text-portfolio-color05 placeholder:italic placeholder:text-portfolio-color04"
          placeholder="Informe seu Telefone"
          {...register("phone")}
        />
      </div>

      <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
        <label
          htmlFor="mail"
          className="w-[100%] laptop:w-[30%] text-center  text-portfolio-color04 font-bold text-1xl "
        >
          Email
        </label>
        <input
          type="text"
          id="mail"
          className="w-[100%] h-[40px] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02 text-portfolio-color05 placeholder:italic placeholder:text-portfolio-color04"
          placeholder="Informe seu Email"
          {...register("mail")}
        />
      </div>

      <div className="flex justify-center items-center flex-col laptop:flex-row gap-4 p-2">
        <label
          htmlFor="messenger"
          className="w-[100%] laptop:w-[30%] text-center text-portfolio-color04 font-bold text-1xl "
        >
          Mensagem
        </label>
        <textarea
          className="w-[100%] laptop:w-[70%] p-2 rounded-md border-[1px] border-portfolio-color04 bg-portfolio-color02 text-portfolio-color05"
          {...register("messenger")}
        />
      </div>

      <div className="flex justify-center items-center flex-row gap-4 p-2">
        <button className="w-[100%] h-[40px] text-xl bg-portfolio-color04 rounded-md flex justify-center items-center flex-row gap-4 ">
          <span>Enviar</span>
          <IoIosSend />
        </button>
      </div>
    </form>
  );
};

export default FormContact;
