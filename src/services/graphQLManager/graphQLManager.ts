import {
  ApolloClient,
  ApolloQueryResult,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { ENV_VARIABLE } from "../../constants/environment.constants";

export const client = new ApolloClient({
  uri: ENV_VARIABLE.BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: ENV_VARIABLE.ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

export const graphQLManager = {
  get: async (
    query: string
  ): Promise<ApolloQueryResult<unknown> | undefined> => {
    try {
      return client.query({
        query: gql`
          ${query}
        `,
      });
    } catch (e) {
      console.log(e);
    }
  },
};
