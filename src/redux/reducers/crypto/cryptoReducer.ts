import {
  ADD_CRYPTO_DETAILS_LIST,
  cryptoActionTypes,
  DELETE_CRYPTO_DETAILS_LIST,
  GET_CRYPTO_DETAILS,
  ICryptoStateType,
} from "../../types/crypto/cryptoType";

const initialCryptoState: ICryptoStateType = {
  cryptoDetailsItem: {
    cryptoDetails: {
      cryptoSymbol: "",
      cryptoPrice: "",
    },
    loading: false,
    error: false,
    message: "",
  },
  cryptoDetailsList: [],
};

export const cryptoReducer = (
  state = initialCryptoState,
  action: cryptoActionTypes
): ICryptoStateType => {
  switch (action.type) {
    case ADD_CRYPTO_DETAILS_LIST:
      return {
        ...state,
        cryptoDetailsList: [action.payload, ...state.cryptoDetailsList],
      };
    case GET_CRYPTO_DETAILS:
      return {
        ...state,
        cryptoDetailsItem: { ...action.payload },
      };
    case DELETE_CRYPTO_DETAILS_LIST:
      return {
        ...state,
        cryptoDetailsList: state.cryptoDetailsList.filter(
          (_, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};
