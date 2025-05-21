import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState, useCallback } from "react";

export const useResponsive = () => {
  const { width } = useWindowSize();
  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isDesktop: false,
  });

  const updateBreakpoints = useCallback(() => {
    if (width === null || width === undefined) {
      // Handle SSR or initial render when width is not available
      return {
        isMobile: false,
        isDesktop: false,
      };
    }

    return {
      isMobile: width < 768,
      isDesktop: width >= 768,
    };
  }, [width]);

  useEffect(() => {
    const newBreakpoints = updateBreakpoints();
    setBreakpoints(newBreakpoints);
  }, [width, updateBreakpoints]);

  return {
    ...breakpoints,
    isContentLoaded: width !== null && width !== undefined,
  };
};
