import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { themeFactory } from "./themeFactory";
import { ThemePalette } from "./themePalette.interface";
import { ThemeMode } from "./themeMode";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
export interface IThemeProviderProps {
  mode?: ThemeMode;
  customThemePalette?: ThemePalette;
  children: React.ReactNode;
}

export interface IColorModeContextProps {
  mode: ThemeMode;
  set: (mode: ThemeMode) => void;
}

export const ColorModeContext = createContext<IColorModeContextProps>({
  mode: ThemeMode.System,
  set: () => {
    throw new Error("Theme provider not initialized");
  },
});

const ThemeProvider: React.FC<IThemeProviderProps> = ({
  mode = ThemeMode.System,
  customThemePalette,
  children,
}: IThemeProviderProps) => {
  const [currentMode, setCurrentMode] = useState<ThemeMode>(mode);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { setThemeModeInLocalStorage, getThemeModeFromLocalStorage } = useLocalStorage();

  useEffect(() => {
    const modeFromStorage = getThemeModeFromLocalStorage();
    if (modeFromStorage && Object.values(ThemeMode as object).includes(modeFromStorage)) {
      setCurrentMode(modeFromStorage as ThemeMode);
    } else {
      setCurrentMode(mode);
      setThemeModeInLocalStorage(mode);
    }
  }, [mode, prefersDarkMode, getThemeModeFromLocalStorage, setThemeModeInLocalStorage]);

  const ctx = useMemo(() => {
    const setMode = (newMode: ThemeMode): void => {
      setThemeModeInLocalStorage(newMode);
      setCurrentMode(newMode);
    };
    return {
      mode: currentMode,
      set: setMode,
    };
  }, [currentMode, setThemeModeInLocalStorage]);

  const theme = useMemo(() => {
    if (currentMode === ThemeMode.System) {
      return themeFactory(prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light, customThemePalette);
    }
    return themeFactory(currentMode, customThemePalette);
  }, [currentMode, prefersDarkMode, customThemePalette]);

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={ctx}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
