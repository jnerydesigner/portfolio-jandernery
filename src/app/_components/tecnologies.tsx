import { CmsIcon } from "../services/cms-icon";
import { Tooltip as ReactTooltip } from "react-tooltip";

export interface TecnologiesProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  techIcon: string;
  techName: string;
  slug?: string;
  startDate?: string;
  techIconColor?: string;
}

export const Technologies = ({
  techIcon,
  techName,
  techIconColor,
  slug,
  id,
  ...rest
}: TecnologiesProps) => {
  return (
    <div className="bg-portfolio-color03 border rounded border-portfolio-color05 b opacity-75 px-2 py-2 drop-shadow-total_opacity text-lg font-bold flex justify-center items-center flex-row gap-2 text-portfolio-color02 mx-2 cursor-pointer shadow-lg">
      {id !== undefined ? (
        <>
          <a data-tooltip-id={id} data-tooltip-content={techName}>
            <CmsIcon icon={techIcon} fontColor={techIconColor} />
          </a>
          <ReactTooltip id={id} />
        </>
      ) : null}
    </div>
  );
};
