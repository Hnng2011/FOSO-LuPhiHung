"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "success"
  | "success-soft"
  | "warning"
  | "warning-soft"
  | "danger"
  | "danger-soft"
  | "info"
  | "info-soft"
  | "neutral"
  | "neutral-soft"
  | "secondary"
  | "secondary-soft"
  | "outline";

const variantClasses: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground",
  success: "bg-success text-success-foreground",
  "success-soft": "bg-success/20 text-success",
  warning: "bg-warning text-warning-foreground",
  "warning-soft": "bg-warning/20 text-warning",
  danger: "bg-danger text-danger-foreground",
  "danger-soft": "bg-danger/20 text-danger",
  info: "bg-info text-info-foreground",
  "info-soft": "bg-info/20 text-info",
  neutral: "bg-neutral text-neutral-foreground",
  "neutral-soft": "bg-neutral/20 text-neutral-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  "secondary-soft": "bg-secondary/20 text-secondary-foreground",
  outline: "border border-border bg-background text-foreground",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-semibold transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
