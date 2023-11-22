import { ThemeProps } from "../../common-types/styled";

/*
 * NB! When adding new properties to const customThemeProps,
 * you must also update the ThemeProps interface in styled.d.ts
 * to be able to use it.
 */
export const customThemeProps: ThemeProps = {
  boxShadow: "none",
  insetBoxShadow: "none",
  rootSurfaceBorderRadius: "16px",
  outerBorderRadius: "12px",
  innerBorderRadius: "8px",
  gap: "0.5rem",
  border: "1px solid rgba(0,0,0, 0.1)",
  buttonHoverBackground: "rgba(0, 0, 0, 0.04)",
  customBoxShadow1: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  customBoxShadow2: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
};

// boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
// insetBoxShadow:"inset 0px 2px 1px -1px rgb(0 0 0 / 20%), inset 0px 1px 1px 0px rgb(0 0 0 / 14%), inset 0px 1px 3px 0px rgb(0 0 0 / 12%)",
