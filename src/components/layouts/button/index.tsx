"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "ghost";

type Size = "default";

const variantClasses: Record<Variant, string> = {
  default: "bg-brand-500 text-white duration-300 hover:bg-hover-brand-500",
  ghost: "bg-transparent text-black !p-0",
};

const sizeClasses: Record<Size, string> = {
  default: "h-12 py-3 px-6 px-4",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  trailing?: React.ReactElement;
  leading?: React.ReactElement;
  as?: React.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as,
      className,
      trailing,
      leading,
      variant = "default",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    const Element = as ?? "button";

    return (
      <Element
        className={cn(
          "inline-flex items-center gap-2 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {trailing && trailing}
        {children}
        {leading && leading}
      </Element>
    );
  }
);
Button.displayName = "Button";

export { Button };
