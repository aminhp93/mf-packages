export const breadcrumbTextRules = (
  parentRoute: string,
  dynamicRoute: string,
  subPath: string
): string => {
  if (parentRoute.toLowerCase() === "data-points") {
    if (dynamicRoute === "[id]") {
      return `ID-${subPath}`;
    } else {
      return "";
    }
  } else {
    return dynamicRoute;
  }
};
