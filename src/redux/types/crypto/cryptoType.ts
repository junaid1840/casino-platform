export const GET_CRYPTO_DETAILS = "GET_CRYPTO_DETAILS";
export const ADD_CRYPTO_DETAILS_LIST = "ADD_CRYPTO_DETAILS_LIST";
export const DELETE_CRYPTO_DETAILS_LIST = "DELETE_CRYPTO_DETAILS_LIST";

export interface ICryptoDetails {
  cryptoSymbol: "";
  cryptoPrice: "";
}

export interface ICryptDetailsItem {
  cryptoDetailsItem: ICryptoDetails;
  loading: boolean;
  error: boolean;
  message: string;
}

export interface ICryptDetailsPayload {
  cryptoDetails: ICryptoDetails | undefined;
  loading: boolean;
  error: boolean;
  message: string;
}

export interface ICryptoStateType {
  cryptoDetailsItem: ICryptDetailsPayload;
  cryptoDetailsList: ICryptoDetails[];
}

export interface IGetCryptoDetails {
  type: typeof GET_CRYPTO_DETAILS;
  payload: ICryptDetailsPayload;
}
export interface IAddCryptoDetailsList {
  type: typeof ADD_CRYPTO_DETAILS_LIST;
  payload: ICryptoDetails;
}
export interface IDeleteCryptoDetailsList {
  type: typeof DELETE_CRYPTO_DETAILS_LIST;
  payload: number;
}

export type cryptoActionTypes =
  | IGetCryptoDetails
  | IAddCryptoDetailsList
  | IDeleteCryptoDetailsList;
