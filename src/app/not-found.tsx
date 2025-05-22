"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex w-screen flex-col gap-2 h-screen items-center justify-center">
      <span className="h1">404</span>
      <span className="h3 font-medium">Not found</span>
      {/* TODO: change to the index route in the future */}
      <Button onClick={() => router.replace("/dashboard")}>Back home</Button>
    </div>
  );
}
