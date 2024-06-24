

import { RouteConfig } from "../types/routeConfig";
import React from "react";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: React.lazy(()=>import("../components/home")),
  },
  {
    path: "/chat",
    name: "Chat",
    exact: true,
    component: React.lazy(()=>import("../components/chat")),
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    component: React.lazy(()=>import("../components/login")),
  },
];

export default routes;
