"use client";

import useUserInfo from "@/store/authenticate";
import { ThemeProvider } from "next-themes";
import { ReactElement, useEffect } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  //TODO: Check authentication
  const { user, setUserInfo } = useUserInfo((state) => state);

  useEffect(() => {
    if (!user)
      setTimeout(
        () =>
          setUserInfo({
            avatar: "https://i.pravatar.cc/100",
            name: "Test User",
            email: "test@gmail.com",
            bio: "A developer passionate about building useful products.",
            followers: 120,
            following: 50,
            posts: 8,
          }),
        2000
      );
  }, [user]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
