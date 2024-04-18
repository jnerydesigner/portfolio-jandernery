import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        p: ({ children }) => (
          <p className="text-xl mb-10 text-justify text-portfolio-color04">
            {children}
          </p>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-color03 hover:text-portfolio-color03/45 font-bold italic"
          >
            {children}
          </a>
        ),
        bold: ({ children }) => (
          <strong className="text-portfolio-color03 font-bold antialiased">
            {children}
          </strong>
        ),
      }}
    />
  );
};
