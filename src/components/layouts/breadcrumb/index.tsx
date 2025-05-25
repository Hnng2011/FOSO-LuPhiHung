"use client";

import {
  Breadcrumb as BC,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const getLabel = (pathItem: string) => {
  switch (pathItem) {
    case "":
      return "Trang chủ";
    case "product-list":
      return "Sản phẩm";
    default:
      return pathItem;
  }
};

export default function BreadCrumb() {
  const pathName = usePathname();
  const pathItems = pathName.split("/");

  return (
    <BC>
      <BreadcrumbList>
        {pathItems.map((pathItem, index) => (
          <React.Fragment key={pathItem}>
            {index !== 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              <BreadcrumbLink href={pathItem}>
                <span
                  className={cn(
                    index === pathItems.length - 1 &&
                      "text-brand-500 hover:text-brand-700-hover font-semibold b2"
                  )}
                >
                  {getLabel(pathItem)}
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </BC>
  );
}
