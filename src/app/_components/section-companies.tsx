import React, { HTMLAttributes } from "react";
import { CompanyCard } from "./company-card";
import { ICompanyWorked, IPageGenerals } from "../services";

interface SectionComponentProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  companies: ICompanyWorked[];
}

const SectionCompanies: React.FC<SectionComponentProps> = ({
  title,
  companies,
  ...rest
}) => {
  return (
    <section
      className="flex justify-center items-center flex-col w-[90%] p-4 my-10"
      {...rest}
    >
      <div className="mb-6 flex justify-center items-center flex-col bg-portfolio-color03 w-full h-16 rounded-xl">
        <h2 className="text-[1.6rem] font-bold text-portfolio-color02">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full place-items-center my-4">
        {companies?.map((company) => (
          <CompanyCard
            key={company.id}
            companyName={company.company}
            endDate={company.workedEnd}
            startDate={company.workedInit}
            imageUrl={company.imageCompany.url}
            linkedinUrl={company.urlLinkedinPage}
            siteUrl={company.urlSite}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionCompanies;
