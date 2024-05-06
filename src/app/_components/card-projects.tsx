import Image from "next/image";
import Tech from "./tech";

import { TbBrandNodejs, TbBrandReact, TbBrandTailwind } from "react-icons/tb";

interface CardProjectsProps {
  nameProject: string;
}

const CardProjects = ({ nameProject }: CardProjectsProps) => {
  return (
    <div className="h-[auto] w-[350px] flex justify-center items-center flex-col p-2 border border-portfolio-color03 rounded-xl">
      <Image
        src="/foto_jander.png"
        alt="Jander Nery"
        width={200}
        height={200}
        className="w-[60%] rounded-xl mb-2"
      />
      <h1 className="text-center text-portfolio-color04 text-[1.2rem] font-bold">
        {nameProject}
      </h1>
      <p className="text-justify text-portfolio-color04 text-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod
        efficitur diam facilisis lacinia. Aliquam at ex eget sapien tincidunt
        commodo ut vitae sem. Pellentesque molestie sagittis augue, a blandit
        orci gravida a. Interdum et malesuada fames ac ante ipsum.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <Tech title="NodeJS" icon={<TbBrandNodejs />} />
        <Tech title="ReactJS" icon={<TbBrandReact />} />
        <Tech title="ReactJS" icon={<TbBrandTailwind />} />
        <Tech title="ReactJS" icon={<TbBrandTailwind />} />
        <Tech title="ReactJS" icon={<TbBrandTailwind />} />
        <Tech title="ReactJS" icon={<TbBrandTailwind />} />
      </div>
    </div>
  );
};

export default CardProjects;
