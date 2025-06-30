"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

interface CompanyCardProps {
  companyName: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  siteUrl: string;
  linkedinUrl: string;
}

export const CompanyCard = ({
  companyName,
  imageUrl,
  startDate,
  endDate,
  siteUrl,
  linkedinUrl,
}: CompanyCardProps) => {
  return (
    <div className="w-[300px] h-[280px] rounded-2xl shadow-lg bg-white p-6 flex justify-center flex-col items-center gap-4 border border-gray-200 border-portfolio-color03 bg-portfolio-white_port">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={imageUrl}
            alt={`Logo da empresa ${companyName}`}
            className="border-2 border-gray-300 object-cover"
            fill
            sizes="128px"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mt-2">{companyName}</h2>
        <p className="text-sm text-gray-500">
          {startDate} — {endDate}
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-2">
        <Link
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <FaGlobe className="w-4 h-4" />
          Site
        </Link>

        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#0A66C2] hover:underline"
        >
          <FaLinkedin className="w-4 h-4" />
          LinkedIn
        </Link>
      </div>
    </div>
  );
};
