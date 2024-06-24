// src/routes/config.ts
import Home from "../components/Home";
import Chat from "../components/Chat";
import Login from "../components/Login";
import { RouteConfig } from "../types/routeConfig";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/chat",
    exact: true,
    component: Chat,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
];

export default routes;
