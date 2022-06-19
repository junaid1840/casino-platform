import {
  ADD_CRYPTO_DETAILS_LIST,
  DELETE_CRYPTO_DETAILS_LIST,
  GET_CRYPTO_DETAILS,
  IAddCryptoDetailsList,
  ICryptDetailsPayload,
  ICryptoDetails,
  IDeleteCryptoDetailsList,
  IGetCryptoDetails,
} from "../../types/crypto/cryptoType";

export const getCryptoDetailsAction = (
  cryptoDetails: ICryptDetailsPayload
): IGetCryptoDetails => ({
  type: GET_CRYPTO_DETAILS,
  payload: cryptoDetails,
});

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
