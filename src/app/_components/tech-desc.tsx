import { Technologies } from "./tecnologies";
import { Tooltip as ReactTooltip } from "react-tooltip";

export interface TechDescProps {
  id: string;
  slug: string;
  techName: string;
  techIcon: string;
}

interface TechComponentProps {
  tech: TechDescProps[];
}

const TechDesc: React.FC<TechComponentProps> = ({ tech }) => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 mt-2">
      {tech.map((tech) => (
        <Technologies
          id={tech.id}
          key={tech.slug}
          techIcon={tech.techIcon}
          techName={tech.techName}
          techIconColor="#142530"
        />
      ))}
    </div>
  );
};

export default TechDesc;
