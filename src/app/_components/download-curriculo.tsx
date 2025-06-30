import { IoIosCloudDownload } from "react-icons/io";

interface DownloadCurriculoProps {
  title: string;
}

export const DownloadCurriculo = ({ title }: DownloadCurriculoProps) => {
  return (
    <a
      href="/curriculo_jander_nery.pdf"
      target="_blank"
      download="Curriculo Jander Nery"
      className="w-[100%] laptop:w-[300px] h-[50px] my-6 bg-portfolio-color03 rounded-full flex justify-center items-center flex-row text-portfolio-color01 bold shadow-xl border-[1px] border-portfolio-color05 gap-4"
    >
      <span className="font-bold">{title}</span>
      <IoIosCloudDownload className="text-[1.6rem]" />
    </a>
  );
};
