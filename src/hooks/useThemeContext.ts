import { ColorModeContext } from "../providers";
import { useContext } from "react";

/**
 * Exposes currently used theme and a setter to change the theme.
 */
const useThemeContext = () => {
  const { mode, set } = useContext(ColorModeContext);
  return [mode, set] as const;
};

export default useThemeContext;
