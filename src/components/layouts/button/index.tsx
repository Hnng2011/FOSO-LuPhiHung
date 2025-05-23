"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "ghost"
  | "link";

type Size = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary-hover",
  destructive: "bg-danger text-danger-foreground hover:bg-danger-hover",
  outline:
    "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
  success: "bg-success text-success-foreground hover:bg-success-hover",
  warning: "bg-warning text-warning-foreground hover:bg-warning-hover",
  info: "bg-info text-info-foreground hover:bg-info-hover",
  ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
  link: "underline-offset-4 hover:underline text-primary",
};

const sizeClasses: Record<Size, string> = {
  default: "h-10 py-2 px-4",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
  icon: "h-10 w-10",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button };
