"use client";

import Header from "@/components/layouts/dashboard/header";
import { AppSideBar } from "@/components/layouts/dashboard/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Loading from "@/components/ui/spinner";
import routePath from "@/config/router-path";
import useUserInfo from "@/store/authenticate";

import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";

function DashboardProvider({ children }: { children: ReactElement }) {
  //TODO: Handle side-effect for Dashboard layout if need
  return (
    <SidebarProvider className="flex w-full h-full p-2 box-border">
      <AppSideBar />

      <div className="flex-col w-full p-2 rounded-lg">
        <Header />
        {children}
      </div>
    </SidebarProvider>
  );
}

export default function Layout({ children }: { children: ReactElement }) {
  const user = useUserInfo((state) => state.user);
  const [loading, setLoading] = useState(!!user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setLoading(false);
      router.replace(routePath.dashboard.main);
    } else {
      setLoading(true);
    }
  }, [user]);

  return (
    <main className="min-h-screen w-full h-full flex items-center justify-center">
      {loading ? (
        <Loading size="lg" />
      ) : (
        <DashboardProvider>{children}</DashboardProvider>
      )}
    </main>
  );
}
