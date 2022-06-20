import {
  ADD_CRYPTO_DETAILS_LIST,
  DELETE_CRYPTO_DETAILS_LIST,
  IAddCryptoDetailsList,
  ICryptoDetails,
  IDeleteCryptoDetailsList,
} from "../../types/crypto/cryptoType";

export const addCryptoDetailsListAction = (
  cryptoDetails: ICryptoDetails
): IAddCryptoDetailsList => ({
  type: ADD_CRYPTO_DETAILS_LIST,
  payload: cryptoDetails,
});

export const deleteCryptoDetailsListAction = (
  deleteIndex: number
): IDeleteCryptoDetailsList => ({
  type: DELETE_CRYPTO_DETAILS_LIST,
  payload: deleteIndex,
});
