import Image from "next/image";
import { IPageGenerals } from "../services";
import React from "react";

interface PageGeneralProps {
  pagesGenerals: IPageGenerals;
}

const PictureView: React.FC<PageGeneralProps> = ({ pagesGenerals }) => {
  return (
    <div className="w-[260px] tablet:w:[260px] laptop:w:[330px] rounded-full flex justify-center items-center drop-shadow-total ">
      {pagesGenerals.profilePicture.url ? (
        <Image
          src={pagesGenerals.profilePicture.url}
          alt={pagesGenerals.name}
          width={200}
          height={200}
          className="w-[100%] rounded-full"
          priority
        />
      ) : null}
    </div>
  );
};
export default PictureView;
