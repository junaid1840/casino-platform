import {
  ApolloClient,
  ApolloQueryResult,
  DefaultOptions,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { ENV_VARIABLE } from "../../constants/environment.constants";
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const client = new ApolloClient({
  uri: ENV_VARIABLE.BASE_URL,
  cache: new InMemoryCache({ resultCaching: false }),
  headers: {
    authorization: ENV_VARIABLE.ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
  defaultOptions: defaultOptions,
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
