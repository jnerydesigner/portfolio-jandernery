import Link from "next/link";
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
    <div className="w-[100%] h-[auto] flex justify-center laptop:justify-start items-center flex-row desktop:flex-col text-3xl gap-6 desktop:gap-1 ">
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
              style={{
                color: `${socialMedia.colorIcon}`,
                fontSize: "1.4rem",
              }}
            />
          ) : null}
          <p style={{ color: `${socialMedia.colorIcon}`, fontSize: "1.4rem" }}>
            {socialMedia.name ? socialMedia.name : null}
          </p>
        </Link>
      ))}
    </div>
  );
};
