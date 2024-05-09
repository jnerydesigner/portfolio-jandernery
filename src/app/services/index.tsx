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

export interface ITechnology {
  id: string;
  slug: string;
  startDate: string;
  techIcon: string;
  techName: string;
}

interface IAbouts {
  title: string;
  description: {
    raw: RichTextContent;
  };
}

export interface ISocialMedia {
  id: string;
  slug: string;
  name: string;
  svgIcon: string;
  url: string;
  colorIcon: string;
}

interface IPersonalData {
  name: string;
  svgIconPersonalData: string;
  description: string;
}

export interface IProjectTecnologies {
  id: string;
  title: string;
  imageProject: {
    url: string;
  };
  description: {
    raw: RichTextContent;
    text: string;
  };
  technologies: ITechnology[];
}

export interface IPageGenerals {
  id: string;
  name: string;
  titleName: {
    raw: RichTextContent;
  };
  contact: {
    title: string;
    formLabelName: string;
    formInputNamePlaceholder: string;
    formLabelPhone: string;
    formInputPhonePlaceholder: string;
    formLabelMail: string;
    formInputMailPlaceholder: string;
    formLabelMessenger: string;
    formInputMessengerPlaceholder: string;
    labelBtn: string;
  };
  profilePicture: {
    url: string;
  };
  introduction: {
    raw: RichTextContent;
  };
  projectTecnologies: IProjectTecnologies[];
  abouts: IAbouts[];
  socialMedias: ISocialMedia[];
  technologies: ITechnology[];
  personalDatas: IPersonalData[];
  companyWorkeds: ICompanyWorked[];
}

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
  projectWorkeds: IProjectWorked[];
}

export interface ICompanyWorkedFather {
  id: string;
  company: string;
  imageCompany: {
    url: string;
  };
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

export interface QueryResult {
  pagesGenerals: IPageGenerals[];
}

// const language = "porfolio-pt";

export const PageHome = async (languageType?: number): Promise<QueryResult> => {
  const language: string = languageType === 1 ? "porfolio-en" : "porfolio-pt";

  const query = gql`
    query MyQuery {
      pagesGenerals(where: { _search: "${language}" }) {
        id
        name
        titleName{
          raw
        }
        contact{
          title
          formLabelName
          formInputNamePlaceholder
          formLabelPhone
          formInputPhonePlaceholder
          formLabelMail
          formInputMailPlaceholder
          formLabelMessenger
          formInputMessengerPlaceholder
          labelBtn
        }
        profilePicture{
          url
        }
        personalDatas{
          name
          svgIconPersonalData
          description
        }
        introduction{
          raw
        }
        projectTecnologies{
          id
          title
          description{
            raw
            text
          }
          imageProject {
            url
          }
          technologies{
            id
            techName
            techIcon
            startDate
            slug
          }
          
        }
        abouts {
          id
          title
          about
          description {
            raw
          }
          slug
        }
        socialMedias {
          id
          slug
          name
          svgIcon
          url
          colorIcon
        }
        technologies(first: 30) {
          id
          techName
          startDate
          slug
          techIcon
        }
        companyWorkeds{
          id
          company
          urlSite
          urlLinkedinPage
          slug
          workedInit
          workedEnd
          imageCompany{
            url
          }
          projectWorkeds{
            id
            name
            description{
              raw
              text
            }
            companyWorked{
              id
              company
              urlSite
              workedInit
              workedEnd
              imageCompany{
                url
              }
            
            }
            technologies{
              id
              techName
              techIcon
            }
          }
        }
      }
    }
  `;

  const data: QueryResult = await graphqlClient.request(query);

  return data;
};
