import {
  IMarket,
  ITicker,
} from "../../services/crypto-services/cryptoMarketServices";
import { ICryptoDetails } from "../../redux/types/crypto/cryptoType";

export const getFormattedPrice = (
  cryptoPrice: ITicker | null
): string | undefined => {
  if (cryptoPrice) {
    return cryptoPrice.lastPrice;
  }
};

export const getFormattedCryptoDetailsItem = (
  cryptoDetailsItem: IMarket | undefined
): ICryptoDetails | undefined => {
  if (cryptoDetailsItem && getFormattedPrice(cryptoDetailsItem.ticker)) {
    return {
      cryptoSymbol: cryptoDetailsItem.baseSymbol,
      cryptoPrice: getFormattedPrice(cryptoDetailsItem.ticker),
    } as ICryptoDetails;
  }
};
export const getCryptoDetailItem = (
  cryptoDetailsList: ICryptoDetails[],
  cryptoSymbol: string
): ICryptoDetails | undefined =>
  cryptoDetailsList.find(
    (detailsItem) => detailsItem.cryptoSymbol.toLowerCase() === cryptoSymbol
  );
