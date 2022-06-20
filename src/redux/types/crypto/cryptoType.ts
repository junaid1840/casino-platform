export const ADD_CRYPTO_DETAILS_LIST = "ADD_CRYPTO_DETAILS_LIST";
export const DELETE_CRYPTO_DETAILS_LIST = "DELETE_CRYPTO_DETAILS_LIST";

export interface ICryptoDetails {
  cryptoSymbol: "";
  cryptoPrice: "";
}

export interface ICryptDetailsPayload {
  cryptoDetails: ICryptoDetails | undefined;
  loading: boolean;
  error: boolean;
  message: string;
}

export interface ICryptoStateType {
  cryptoDetailsList: ICryptoDetails[];
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
  | IAddCryptoDetailsList
  | IDeleteCryptoDetailsList;
