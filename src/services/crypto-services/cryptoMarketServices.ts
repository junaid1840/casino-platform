import { graphQLManager } from "../graphQLManager/graphQLManager";
import { ApolloQueryResult } from "@apollo/client";

export type ITicker = {
  lastPrice: string;
};
export type IMarket = {
  baseSymbol: string;
  ticker: ITicker | null;
};
export type ICryptoCurrentPriceResponse = {
  markets: IMarket[];
};

export const getCryptoCurrentPrice = async (
  cryptoSymbol: string
): Promise<ApolloQueryResult<ICryptoCurrentPriceResponse>> => {
  const query = `
  query price {
  markets(filter:{ baseSymbol: {_eq:"${cryptoSymbol}"} quoteSymbol: {_eq:"EUR"}}) {
    baseSymbol
    ticker {
      lastPrice
    }
  }
}
  `;
  return graphQLManager.get(query) as Promise<
    ApolloQueryResult<ICryptoCurrentPriceResponse>
  >;
};
