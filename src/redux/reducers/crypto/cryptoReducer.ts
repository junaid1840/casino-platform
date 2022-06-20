import {
  ADD_CRYPTO_DETAILS_LIST,
  cryptoActionTypes,
  DELETE_CRYPTO_DETAILS_LIST,
  ICryptoStateType,
} from "../../types/crypto/cryptoType";

const initialCryptoState: ICryptoStateType = {
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
