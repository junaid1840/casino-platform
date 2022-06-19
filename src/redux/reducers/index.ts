import { combineReducers } from "redux";
import { cryptoReducer } from "./crypto/cryptoReducer";

export const rootReducer = combineReducers({
  cryptoReducer: cryptoReducer,
});
