import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { darken, lighten, Theme } from "@mui/material/styles";
import { styled, StyledProp, ThemeMode } from "../../../providers";

interface StyledCardProps {
  themeMode: ThemeMode;
  isEditActive?: boolean;
  isContextWidget?: boolean;
}

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) =>
    prop !== "themeMode" && prop !== "isEditActive" && prop !== "isContextWidget",
})<StyledCardProps>(
  ({ theme, themeMode, isEditActive, isContextWidget }: StyledProp & StyledCardProps) => {
    const initialBoxShadow = getBoxShadow(themeMode, theme);

    return {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: getContentBackground({ themeMode, theme, isContextWidget }),
      borderRadius: theme.palette.customTheme.innerBorderRadius,
      boxShadow: initialBoxShadow,

      ":has( > .MuiCardHeader-root:hover)": {
        boxShadow: isEditActive ? theme.shadows[8] : initialBoxShadow,
      },
    };
  }
);

const getBoxShadow = (themeMode: ThemeMode, theme: Theme): string => {
  return themeMode === ThemeMode.Dark ? theme.shadows[4] : theme.shadows[2];
};

export const StyledCardHeader = styled(CardHeader, {
  shouldForwardProp: (prop) =>
    prop !== "themeMode" &&
    prop !== "isContextWidget" &&
    prop !== "isEditActive" &&
    prop !== "isHighlighted",
})<Partial<StyledCardProps>>((props: StyledProp & Partial<StyledCardProps>) => ({
  color: props.theme.palette.primary.contrastText,
  background: getHeaderBackground(props),
  cursor: props.isEditActive ? "move" : "default",
}));

export const getHeaderBackground = ({
  themeMode,
  theme,
  isContextWidget,
}: StyledProp & Partial<StyledCardProps>): string => {
  if (themeMode === ThemeMode.Dark) {
    if (isContextWidget) {
      return darken(theme.palette.secondary.dark, 0.5);
    }
    return `linear-gradient(135deg, ${(theme.palette.primary.main, 0.05)})} 0%, ${
      theme.palette.primary.light
    } 100%)`;
  } else {
    if (isContextWidget) {
      return lighten(theme.palette.secondary.light, 0.4);
    }
    return `linear-gradient(135deg, ${lighten(theme.palette.primary.light, 0.2)} 0%, ${darken(
      theme.palette.primary.main,
      0.1
    )} 100%)`;
  }
};

export const StyledCardContent = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== "themeMode" && prop !== "isContextWidget",
})<Partial<StyledCardProps>>((props: StyledProp & Partial<StyledCardProps>) => ({
  overflow: "auto",
  flex: 1,
  cursor: "default",
  padding: props.isContextWidget
    ? `${props.theme.spacing(8)} !important`
    : `${props.theme.spacing(4)} !important`,
}));

export const getContentBackground = ({
  themeMode,
  theme,
  isContextWidget,
}: StyledProp & Partial<StyledCardProps>): string => {
  if (themeMode === ThemeMode.Dark) {
    if (isContextWidget) {
      return darken(theme.palette.secondary.dark, 0.7);
    }
    return lighten(theme.palette.customTheme.layoutPrimaryColor, 0.05);
  } else {
    if (isContextWidget) {
      return lighten(theme.palette.secondary.light, 0.85);
    }
    return lighten(theme.palette.customTheme.layoutPrimaryColor, 0.1);
  }
};

export const StyledCardActions = styled(CardActions, {
  shouldForwardProp: (prop) => prop !== "themeMode",
})<Partial<StyledCardProps>>(({ theme, themeMode }: StyledProp & Partial<StyledCardProps>) => ({
  justifyContent: "space-between",
  background:
    themeMode === ThemeMode.Dark
      ? darken(theme.palette.customTheme.layoutPrimaryColor, 0.05)
      : darken(theme.palette.customTheme.layoutPrimaryColor, 0.02),
}));

export const widgetContainerProps = {
  spacing: 6,
  padding: 3,
};
