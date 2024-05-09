import type { RichTextContent } from "@graphcms/rich-text-types";

import { GraphQLClient, gql } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  String(process.env.NEXT_PUBLIC_HYGRAPHQ_URL),
  {
    headers: {
      "x-api-key": String(process.env.NEXT_PUBLIC_HYGRAPHQ_API_KEY),
    },
    next: {
      revalidate: 60 * 60,
    },
  }
);

export interface ICompanyWorked {
  id: string;
  company: string;
  urlSite: string;
  urlLinkedinPage: string;
  slug: string;
  workedInit: string;
  workedEnd: string;
  imageCompany: {
    url: string;
  };
}

export interface ITechnology {
  id: string;
  slug: string;
  startDate: string;
  techIcon: string;
  techName: string;
}

export interface IProjectWorked {
  id: string;
  name: string;
  companyWorked: ICompanyWorked;
  description: {
    raw: RichTextContent;
    text: string;
  };
  technologies: ITechnology[];
}

export interface IProject {
  projectWorked: IProjectWorked;
}

export const SearchPageProject = async (
  projectId: string,
  languageType?: number
): Promise<IProject> => {
  const language: string = languageType === 1 ? "porfolio-en" : "porfolio-pt";

  const query = gql`
    query ProjectWorkedsQuery {
        projectWorked(where: {id:"${projectId}"}) {
          id
          name
          companyWorked{
            id
            company
            workedInit
            workedEnd
            imageCompany{
              url
            }
          }
          description{
            raw
          }
          technologies(first: 30) {
            id
            techName
            startDate
            slug
            techIcon
          }
         
        }
      }
    
    `;

  const data: IProject = await graphqlClient.request(query);

  return data;
};
