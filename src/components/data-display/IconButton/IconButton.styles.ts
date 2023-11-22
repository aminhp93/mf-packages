import IconButton from "@mui/material/IconButton";
import { CSSObject, styled } from "@mui/material/styles";
import { Elevation, Elevations } from "../../../enums/darkThemeElevations";

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) =>
    prop !== "elevation" && prop !== "iconColor" && prop !== "additionalCSS",
})<{ iconColor?: string; elevation?: Elevations; additionalCSS?: CSSObject }>(
  ({ theme, elevation, iconColor, additionalCSS }) => ({
    width: "2rem",
    height: "2rem",
    color: iconColor || "black",
    boxShadow: theme.palette.customTheme?.boxShadow,
    ...additionalCSS,
    ...Elevation(elevation, theme.palette.customTheme?.boxShadow),
  })
);
