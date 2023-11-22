import { ThemeMode } from "./themeMode";
import { ThemePalette } from "./themePalette.interface";
import { darkModePalette, lightModePalette } from "./customThemePalettes";
import { customThemeProps } from "./customThemeProps";
import { Theme, createTheme } from "@mui/material/styles";
import type {} from "@mui/lab/themeAugmentation";
// eslint-disable-next-line no-restricted-imports
import { PaletteMode } from "@mui/material";

const getCurrentThemePalette = (
  mode: PaletteMode,
  customThemePalette?: ThemePalette
): ThemePalette => {
  if (mode === ThemeMode.Light) {
    if (customThemePalette) {
      return { ...customThemePalette };
    } else {
      return { ...lightModePalette };
    }
  }
  return { ...darkModePalette };
};

export const themeFactory = (mode: PaletteMode, customThemePalette?: ThemePalette): Theme => {
  const currentThemePalette = getCurrentThemePalette(mode, customThemePalette);

  return createTheme({
    palette: {
      mode,
      primary: { ...currentThemePalette.primaryColor },
      secondary: { ...currentThemePalette.secondaryColor },
      customTheme: { ...customThemeProps, ...currentThemePalette },
    },
    components: {
      MuiMenu: {
        styleOverrides: {
          root: {
            zIndex: 2147483647,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: currentThemePalette.layoutContrastColor,
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          input: {
            textOverflow: "ellipsis",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&.MuiIconButton-root": {
              color: currentThemePalette.textPrimaryColor,
            },
          },
        },
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            "&.MuiIcon-root": {
              color: currentThemePalette.textPrimaryColor,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.MuiTypography-root": {
              color: currentThemePalette.textPrimaryColor,
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          ".MuiMenu-root": {
            zIndex: "2147483647 !important",
          },
          "& .MuiPaper-root .MuiCard-root": {
            overflow: "auto",
          },
          "*::-webkit-scrollbar": {
            width: "0.25rem",
            background: "transparent !important",
          },
          "*::-webkit-scrollbar-track": {
            background: "transparent !important",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "rgba(0,0,0,0.10)",
            borderRadius: "10rem",
          },
          "*:hover": {
            "::-webkit-scrollbar-thumb": {
              background: "rgba(0,0,0,0.2)",
            },
          },
        },
      },
    },
    // Spacing object uses rem instead of px to enable dynamic styling.
    spacing: (factor: number) => `${0.25 * factor}rem`,
  });
};
