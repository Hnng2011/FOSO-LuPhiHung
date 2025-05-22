"use client";

import useUserInfo from "@/store/authenticate";
import { ReactElement, useEffect } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  //TODO: Check authentication
  const { user, setUserInfo } = useUserInfo((state) => state);

  useEffect(() => {
    if (!user)
      setTimeout(
        () =>
          setUserInfo({
            avatar: "",
            name: "Test User",
            email: "test@gmail.com",
          }),
        2000
      );
  }, [user]);

  return <>{children}</>;
}
