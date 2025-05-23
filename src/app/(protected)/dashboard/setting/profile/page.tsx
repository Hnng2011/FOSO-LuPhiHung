"use client";

import { useState } from "react";
import { Button } from "@/components/layouts/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronRight, Pencil } from "lucide-react";
import clsx from "clsx";
import useUserInfo from "@/store/authenticate";
import { ActionCard } from "@/components/ui/action-card";
import { useRouter } from "next/navigation";
import routePath from "@/config/router-path";

const posts = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  title: "Post title",
  desc: "Brief excerpt or description",
}));

export default function ProfilePage() {
  const [tab, setTab] = useState("posts");
  const user = useUserInfo((state) => state.user);

  const router = useRouter();

  return (
    <div className="max-w-2xl">
      {/* Profile header */}
      <ActionCard>
        <div className="flex flex-col items-center">
          <div className="flex w-full  justify-end">
            <Button
              onClick={() => {
                router.push(routePath.dashboard.setting.profile.edit);
              }}
              variant="outline"
            >
              <Pencil className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>

          <div className="relative w-28 h-28 md:w-36 md:h-36 mb-2">
            <img
              src={user?.avatar}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover border-2 border-border bg-muted"
            />
            {/* Optionally add an edit icon overlay here */}
          </div>
          <div className="text-2xl md:text-3xl font-bold">{user?.name}</div>
          <div className="text-muted-foreground text-sm">{user?.email}</div>
          <div className="text-sm md:text-base mt-1">{user?.bio}</div>

          <Button
            className="mt-3 px-6 py-1.5 text-sm font-semibold"
            variant="info"
          >
            Contact
          </Button>

          <div className="flex justify-center gap-8 mt-2 w-full">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{user?.followers}</span>
              <span className="text-xs text-muted-foreground">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{user?.following}</span>
              <span className="text-xs text-muted-foreground">Following</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{user?.posts}</span>
              <span className="text-xs text-muted-foreground">Posts</span>
            </div>
          </div>
        </div>
      </ActionCard>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="mt-6">
        <TabsList className="w-full flex">
          <TabsTrigger value="posts" className="flex-1">
            Posts
          </TabsTrigger>
          <TabsTrigger value="followers" className="flex-1">
            Followers
          </TabsTrigger>
          <TabsTrigger value="following" className="flex-1">
            Following
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="pt-4">
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className={clsx(
                  "flex items-center bg-card border rounded-xl px-3 py-2 shadow-sm",
                  "hover:bg-accent transition"
                )}
              >
                <div className="w-10 h-10 rounded-full bg-muted mr-3 border" />
                <div className="flex-1">
                  <div className="font-semibold">{post.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {post.desc}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="followers" className="pt-4">
          <div className="text-center text-muted-foreground">
            Followers list here...
          </div>
        </TabsContent>
        <TabsContent value="following" className="pt-4">
          <div className="text-center text-muted-foreground">
            Following list here...
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
