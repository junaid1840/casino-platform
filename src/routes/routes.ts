import { iRoutes } from "./routesInterface";
import { Home } from "../pages/home/Home";
import { ROUTES } from "./routeConstants";

const { HOME_PAGE } = ROUTES;

export const routes: iRoutes[] = [
  {
    path: HOME_PAGE,
    exact: true,
    component: Home,
  },
];
