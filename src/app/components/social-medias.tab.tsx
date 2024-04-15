import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const SocialMediaTab = () => {
  return (
    <div className="w-[100%] h-[50px] flex justify-center laptop:justify-start items-center flex-row text-3xl gap-6">
      <Link href="https://www.linkedin.com/in/jander-nery" target="_blank">
        <FaLinkedin className="text-portfolio-linkedin drop-shadow-total_opacity" />
      </Link>

      <Link href="https://github.com/jnerydesigner" target="_blank">
        <FaGithub className="text-portfolio-github drop-shadow-total_opacity" />
      </Link>
    </div>
  );
};
