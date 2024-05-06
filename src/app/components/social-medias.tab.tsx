import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { CmsIcon } from "../services/cms-icon";

type IsocialMediaType = {
  id?: string;
  slug?: string;
  name?: string;
  svgIcon?: string;
  url?: string;
  colorIcon?: string;
};

type SocialMedia = {
  socialMedias: IsocialMediaType[];
};

export const SocialMediaTab = ({ socialMedias }: SocialMedia) => {
  return (
    <div className="w-[100%] h-[50px] flex justify-center laptop:justify-start items-center flex-row text-3xl gap-6 ">
      {socialMedias.map((socialMedia) => (
        <Link
          key={socialMedia.id}
          href={socialMedia.url ? socialMedia.url : "/"}
          target="_blank"
          className="flex justify-center items-center"
        >
          {socialMedia.svgIcon ? (
            <CmsIcon
              icon={socialMedia.svgIcon}
              fontColor={`${
                socialMedia.colorIcon
                  ? socialMedia.colorIcon
                  : "portfolio-color03"
              }`}
            />
          ) : null}
          <p
            className={`ml-[10px] text-[${
              socialMedia.colorIcon
                ? socialMedia.colorIcon
                : "portfolio-color03"
            }]`}
          >
            {socialMedia.name ? socialMedia.name : null}
          </p>
        </Link>
      ))}
    </div>
  );
};
