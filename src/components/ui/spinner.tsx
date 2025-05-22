import React from "react";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Loading = ({
  size = "md",
  color = "gray",
  className = "",
}: {
  size?: Size;
  color?: Color;
  className?: string;
}) => {
  const sizeClasses: Record<Size, string> = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses: Record<Color, string> = {
    gray: "text-gray-500",
    blue: "text-blue-500",
    white: "text-white",
  };

  return (
    <div className={cn("flex items-center justify-cente", className)}>
      <Loader2
        className={cn("animate-spin", sizeClasses[size], colorClasses[color])}
      />
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["blue", "gray", "white"]),
  className: PropTypes.string,
};

export default Loading;
