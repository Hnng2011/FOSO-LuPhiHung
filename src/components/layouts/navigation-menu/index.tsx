"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

export interface NavMenuItem {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface NavMenuProps {
  label: string;
  items: NavMenuItem[];
  className?: string;
}

function NavMenu({ label, items, className }: NavMenuProps) {
  if (!items?.length) return null;

  return (
    <NavigationMenu className={cn("list-none", className)}>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-brand-500 !text-white hover:!bg-brand-500 focus:bg-brand-500  data-[state=open]:bg-brand-500">
          {label}
        </NavigationMenuTrigger>
        <NavigationMenuContent></NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

export { NavMenu };
