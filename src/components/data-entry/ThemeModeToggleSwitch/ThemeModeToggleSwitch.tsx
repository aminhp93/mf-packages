import React, { useCallback, useMemo } from "react";
import { ThemeMode } from "../../../providers";
import { useThemeContext } from "../../../hooks";
import { MUISwitch } from "./ThemeModeToggleSwitch.styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ThemeModeToggleSwitch = () => {
  const [mode, toggleTheme] = useThemeContext();
  const systemPrefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const checked = useMemo(
    () => mode === ThemeMode.Dark || (mode === ThemeMode.System && systemPrefersDarkMode),
    [mode, systemPrefersDarkMode]
  );

  const handleDarkModeToggle = useCallback((): void => {
    toggleTheme(checked ? ThemeMode.Light : ThemeMode.Dark);
  }, [checked]);

  return <MUISwitch sx={{ m: 1 }} checked={checked} onClick={handleDarkModeToggle} />;
};

export default ThemeModeToggleSwitch;
