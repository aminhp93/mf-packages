import { parse } from "next-useragent";
import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const { isMobile: isMobileAgent } = parse(window?.navigator?.userAgent || "");
    setIsMobile(isMobileAgent);
  }, []);

  return { isMobile };
};
