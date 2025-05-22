"use client";

import useUserInfo from "@/store/authenticate";
import { ReactElement, useEffect } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  //TODO: Check authentication
  const setUserInfo = useUserInfo((state) => state.setUserInfo);

  useEffect(() => {
    setTimeout(
      () =>
        setUserInfo({ avatar: "", name: "Test User", email: "test@gmail.com" }),
      2000
    );
  }, []);

  return <>{children}</>;
}
