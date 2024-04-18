import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  String(process.env.NEXT_PUBLIC_HYGRAPHQ_URL),
  {
    headers: {
      "x-api-key": String(process.env.NEXT_PUBLIC_HYGRAPHQ_API_KEY),
    },
  }
);
