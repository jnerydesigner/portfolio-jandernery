"use client";

import { useAppContext } from "@/context/app.context";
import { Information } from "../information";
import BarProjects from "../_components/bar-projects";
import CardProjects from "../_components/card-projects";

const MainProjects = () => {
  const { language } = useAppContext();
  const information = Information;
  return (
    <div className="h-[90vh] w-[80%] flex justify-center flex-col items-center mb-20">
      <BarProjects />
      <div className="h-[80%] grid grid-cols-3 gap-4">
        <CardProjects nameProject="Jogo da Velha" />
        <CardProjects nameProject="Jogo da Velha" />
        <CardProjects nameProject="Jogo da Velha" />
      </div>
    </div>
  );
};

export default MainProjects;
