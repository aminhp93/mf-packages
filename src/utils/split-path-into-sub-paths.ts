export const splitPathIntoSubPaths = (path: string): string[] => {
  const pathWithoutQuery = path.split("?")[0];
  return pathWithoutQuery.split("/").filter((subPath) => subPath.length > 0);
};
