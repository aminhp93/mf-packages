import { parse } from "next-useragent";

export const isMobile = (req: any) => {
  const { isMobile } = parse(req.headers["user-agent"] || "");
  return isMobile;
};
