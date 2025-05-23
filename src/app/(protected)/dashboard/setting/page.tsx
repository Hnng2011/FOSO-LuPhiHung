"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/layouts/button";
import { Badge } from "@/components/layouts/badge";
import { Sun, Moon, Monitor } from "lucide-react";
import { ActionCard } from "@/components/ui/action-card";
import { useTheme } from "next-themes";
import useUserInfo from "@/store/authenticate";
import routePath from "@/config/router-path";

function ProfileSection() {
  const user = useUserInfo((state) => state.user);
  const router = useRouter();

  return (
    <ActionCard
      action={{
        label: "View Profile",
        func: () => router.push(routePath.dashboard.setting.profile.main),
      }}
      content={
        <>
          <img
            src={user?.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border border-border"
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">{user?.name}</span>
              <Badge variant="info-soft" className="ml-2">
                Member
              </Badge>
            </div>
            <div className="text-muted-foreground">{user?.email}</div>
            <div className="mt-2">{user?.bio}</div>
          </div>
        </>
      }
    />
  );
}

function AppSettingsSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Or a skeleton/loader if you prefer

  return (
    <section className="bg-card rounded-lg">
      <div className="font-semibold mb-4">Application Settings</div>
      <div className="flex items-center gap-4">
        <span className="text-sm">Theme:</span>
        <Button
          variant={theme === "light" ? "success" : "outline"}
          size="sm"
          onClick={() => setTheme("light")}
        >
          <Sun className="w-4 h-4 mr-1" /> Light
        </Button>
        <Button
          variant={theme === "dark" ? "success" : "outline"}
          size="sm"
          onClick={() => setTheme("dark")}
        >
          <Moon className="w-4 h-4 mr-1" /> Dark
        </Button>
        <Button
          variant={theme === "system" ? "success" : "outline"}
          size="sm"
          onClick={() => setTheme("system")}
        >
          <Monitor className="w-4 h-4 mr-1" /> System
        </Button>
      </div>
    </section>
  );
}

export default function Settings() {
  return (
    <div className="max-w-2xl space-y-10">
      <ProfileSection />
      <AppSettingsSection />
    </div>
  );
}
