import { gql } from "@apollo/client";

export const GET_CRYPTO_PRICE_QUERY = gql`
  query price($cryptoSymbol: String) {
    markets(
      filter: {
        baseSymbol: { _eq: $cryptoSymbol }
        quoteSymbol: { _eq: "EUR" }
      }
    ) {
      baseSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
