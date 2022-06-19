import { createContext } from "react";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";
import { cryptoActionTypes } from "../../redux/types/crypto/cryptoType";
import { Dispatch } from "redux";

export interface iGlobalContext {
  showLoader: boolean;
  globalDispatch: (
    effect: (dispatch: Dispatch<cryptoActionTypes>) => Promise<iApiResponse>
  ) => Promise<iApiResponse>;
}

export const GlobalContext = createContext({} as iGlobalContext);
