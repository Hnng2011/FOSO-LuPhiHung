import { Home, Calendar, Box, Settings } from "lucide-react";
import routePath from "./router-path";

export const APP_CONFIG = {
  meta: {
    title: "KasraDash",
    description: "KasraDash Test",
  },

  //Name of dashboard
  dashboardName: "KasraDash",

  //Route for AppSidebar
  sidebarRoute: [
    {
      title: "Dashboard",
      url: routePath.dashboard.main,
      icon: Home,
    },
    {
      title: "Pending Suppliers",
      url: routePath.dashboard.suppliers,
      icon: Box,
    },
    {
      title: "Pending Events",
      url: routePath.dashboard.events,
      icon: Calendar,
    },
    //TODO: Add more sidebar route if need
  ],

  footerRoute: [
    {
      title: "Settings",
      url: routePath.dashboard.setting.main,
      icon: Settings,
    },
  ],
};
