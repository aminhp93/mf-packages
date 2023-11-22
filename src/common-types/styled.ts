import "@mui/material/styles";
import { ThemePalette } from "../providers";

export interface ThemeProps {
  boxShadow: string;
  insetBoxShadow: string;
  rootSurfaceBorderRadius: string;
  outerBorderRadius: string;
  innerBorderRadius: string;
  gap: string;
  border: string;
  buttonHoverBackground: string;
  customBoxShadow1: string;
  customBoxShadow2: string;
}

export interface CustomTheme {
  customTheme: ThemeProps & ThemePalette;
}

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface Palette extends CustomTheme {}
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions extends CustomTheme {}
}
