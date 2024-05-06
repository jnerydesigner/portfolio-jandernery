import React from "react";

interface SectionComponentProps {
  children: React.ReactNode;
  title?: string;
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  children,
  title,
}) => {
  return (
    <section className="flex justify-center items-center flex-col w-[90%] p-4 my-10">
      <div className="mb-6 flex justify-center items-center flex-col bg-portfolio-color03 w-full h-16 rounded-xl">
        <h2 className="text-[1.6rem] font-bold text-portfolio-color02">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 gap-4">
        {children}
      </div>
    </section>
  );
};

export default SectionComponent;
