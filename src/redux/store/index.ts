import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) //composeWithDevTools is used here for development purposes. It should be removed for production
);

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;
