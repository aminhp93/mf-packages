// eslint-disable-next-line no-restricted-imports, no-unused-vars
import { CustomTheme } from "../common-types/styled";

declare module "@mui/material/styles/createPalette" {
  // eslint-disable-next-line no-unused-vars
  interface Palette extends CustomTheme {}
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions extends CustomTheme {}
}
