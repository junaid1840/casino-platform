import { Dispatch } from "redux";
import {
  addCryptoDetailsListAction,
  getCryptoDetailsAction,
} from "../../actions/crypto/cryptoAction";
import {
  IGetCryptoDetails,
  ICryptDetailsPayload,
  IAddCryptoDetailsList,
  ICryptoDetails,
} from "../../types/crypto/cryptoType";
import {
  getCryptoCurrentPrice,
  IMarket,
  ITicker,
} from "../../../services/crypto-services/cryptoMarketServices";
import { ERROR_MESSAGE } from "../../../constants/errorMessage.constants";

const getFormattedPrice = (cryptoPrice: ITicker | null): string | undefined => {
  if (cryptoPrice) {
    return cryptoPrice.lastPrice;
  }
};
const getFormattedCryptoDetailsItem = (
  cryptoDetailsItem: IMarket | undefined,
  cryptoSymbol: string
): ICryptDetailsPayload => {
  if (cryptoDetailsItem && getFormattedPrice(cryptoDetailsItem.ticker)) {
    return {
      cryptoDetails: {
        cryptoSymbol: cryptoDetailsItem.baseSymbol,
        cryptoPrice: getFormattedPrice(cryptoDetailsItem.ticker),
      },
      loading: false,
      error: false,
      message: "",
    } as ICryptDetailsPayload;
  }
  return {
    cryptoDetails: undefined,
    loading: false,
    error: true,
    message: ERROR_MESSAGE.CURRENCY_DETAILS_NOT_AVAILABLE(cryptoSymbol),
  };
};

export const cryptoDetailsEffect =
  (cryptoSymbol: string) =>
  async (
    dispatch: Dispatch<IGetCryptoDetails | IAddCryptoDetailsList>
  ): Promise<void> => {
    dispatch(
      getCryptoDetailsAction({
        cryptoDetails: undefined,
        loading: true,
        error: false,
        message: "",
      })
    );
    const { data } = await getCryptoCurrentPrice(cryptoSymbol);
    const firstValidDetailItem = data.markets.find(
      (cryptoItem) => cryptoItem.ticker !== null
    );

    const formattedCryptoDetails = getFormattedCryptoDetailsItem(
      firstValidDetailItem,
      cryptoSymbol
    );

    dispatch(getCryptoDetailsAction(formattedCryptoDetails));
    formattedCryptoDetails.cryptoDetails &&
      dispatch(
        addCryptoDetailsListAction(
          formattedCryptoDetails.cryptoDetails as ICryptoDetails
        )
      );
  };
