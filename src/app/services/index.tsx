import type { RichTextContent } from "@graphcms/rich-text-types";

import { GraphQLClient, gql } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  String(process.env.NEXT_PUBLIC_HYGRAPHQ_URL),
  {
    headers: {
      "x-api-key": String(process.env.NEXT_PUBLIC_HYGRAPHQ_API_KEY),
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
export interface QueryResult {
  technologies: ITechnology[];
  abouts: IAbouts[];
}

export const PageHome = async (): Promise<QueryResult> => {
  const query = gql`
    query MyQuery {
      technologies {
        techIcon
        techName
        slug
        startDate
      }
      abouts {
        title
        description {
          raw
        }
      }
    }
  `;

  const data: QueryResult = await graphqlClient.request(query);

  return data;
};
