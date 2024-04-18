import type { RichTextContent } from "@graphcms/rich-text-types";

import { GraphQLClient, gql } from "graphql-request";
import { revalidateTag } from "next/cache";

export const graphqlClient = new GraphQLClient(
  String(process.env.NEXT_PUBLIC_HYGRAPHQ_URL),
  {
    headers: {
      "x-api-key": String(process.env.NEXT_PUBLIC_HYGRAPHQ_API_KEY),
    },
    next: {
      tags: ["pagesGenerals"],
    },
  }
);

export interface ITechnology {
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

interface ISocialMedia {
  id: string;
  slug: string;
  name: string;
  svgIcon: string;
  url: string;
}

interface IPageGenerals {
  id: string;
  abouts: IAbouts[];
  socialMedias: ISocialMedia[];
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
        }
        technologies {
          id
          techName
          startDate
          slug
        }
      }
    }
  `;

  const data: QueryResult = await graphqlClient.request(query);

  return data;
};
