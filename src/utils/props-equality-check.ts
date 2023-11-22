export const propsEqualityCheck = (prevProps: any, nextProps: any) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);
