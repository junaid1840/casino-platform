import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { routes } from "./routes/routes";
import { RouteWithSubRoutes } from "./routes/routeWithSubRoutes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/graphQLManager/graphQLManager";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "./component/core/loader/Loader";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ApolloProvider client={client}>
            <RouteWithSubRoutes routes={routes} />
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
