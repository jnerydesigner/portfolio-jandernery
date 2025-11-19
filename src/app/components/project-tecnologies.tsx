import { ExperienceCard } from "../_components/experience-card";
import { ITechnology } from "../services";
import { CmsIcon } from "../services/cms-icon";
import { calculateElapsedTime } from "../utils/calculate-elapsed-time";
import { substitutionStrinHW } from "../utils/svg-height-width";

interface IProjectTechnologiesProps {
  tecnologies: ITechnology[];
  languageSection: string;
}

export const ProjectTechnologies = ({
  tecnologies,
  languageSection,
}: IProjectTechnologiesProps) => {
  return (
    <div className="mt-10  h-[auto] w-[112%] p-2 grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5 gap-4">
      {tecnologies.map((tech) => (
        <div
          key={tech.slug}
          className="h-[220px] border-[2px] border-portfolio-color04 p-4 rounded-2xl flex justify-center items-center flex-col bg-portfolio-color03"
        >
          <CmsIcon icon={substitutionStrinHW("4em", "4em", tech.techIcon)} />

          <ExperienceCard
            date={tech.startDate}
            language={languageSection}
            title={tech.techName}
          />
        </div>
      ))}
    </div>
  );
};
