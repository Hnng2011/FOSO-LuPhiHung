"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
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
  icon: React.ReactElement;
}

function NavMenu({ label, items, className, icon }: NavMenuProps) {
  if (!items?.length) return null;

  return (
    <NavigationMenu className={cn("list-none", className)}>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-brand-700 !text-white hover:!bg-brand-700-hover focus:bg-brand-700-hover  data-[state=open]:bg-brand-700-hover data-[state=open]:focus:bg-brand-700-hover inline-flex items-center gap-2">
          {icon}
          {label}
        </NavigationMenuTrigger>
        <NavigationMenuContent></NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

export { NavMenu };
