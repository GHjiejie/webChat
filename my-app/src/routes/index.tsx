import { RouteConfig } from "../types/routeConfig";
import React from "react";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Login",
    exact: true,
    // redirectTo: "/login",
    // component: React.lazy(() => import("../pages/Home/home")),
    component: React.lazy(() => import("../pages/Login/login")),
  },
  {
    path: "/home",
    name: "Home",
    exact: true,
    component: React.lazy(() => import("../pages/Home/home")),
  },
  {
    path: "/chat",
    name: "Chat",
    exact: true,
    component: React.lazy(() => import("../pages/Chat/chat")),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   exact: true,
  //   component: React.lazy(() => import("../pages/Login/login")),
  // },
];

export default routes;
