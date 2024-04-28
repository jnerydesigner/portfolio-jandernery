import { CmsIcon } from "../services/cms-icon";

export type TecnologiesProps = {
  techIcon: string;
  techName: string;
  slug?: string;
  startDate?: string;
  techIconColor?: string;
};

export const Technologies = ({
  techIcon,
  techName,
  techIconColor,
}: TecnologiesProps) => {
  return (
    <div className="bg-portfolio-color03 border rounded border-portfolio-color05 b opacity-75 px-2 py-2 drop-shadow-total_opacity text-lg font-bold flex justify-center items-center flex-row gap-2 text-portfolio-color02 mx-2">
      <CmsIcon icon={techIcon} fontColor={techIconColor} />
      {/* <span>{techName}</span> */}
    </div>
  );
};
