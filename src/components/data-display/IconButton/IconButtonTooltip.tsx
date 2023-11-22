import { IconButtonProps } from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import React, { forwardRef } from "react";
import { StyledIconButton } from "./IconButton.styles";

interface IconButtonTooltipProps extends IconButtonProps {
  text: string;
  iconColor?: string;
  children: React.ReactNode;
  placement?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
  enterDelay?: number;
}

const IconButtonTooltip = (
  {
    text,
    iconColor,
    children,
    placement = "bottom",
    enterDelay = 400,
    ...rest
  }: IconButtonTooltipProps,
  ref: React.Ref<unknown> | undefined
) => {
  const theme = useTheme();
  return (
    <Tooltip title={text} placement={placement} enterDelay={enterDelay} ref={ref}>
      <div style={{ padding: theme.spacing(0.5) }}>
        <StyledIconButton
          iconColor={iconColor ?? theme.palette.customTheme.textPrimaryColor}
          aria-label={text}
          {...rest}
          data-testid="styledIconButton"
        >
          {children}
        </StyledIconButton>
      </div>
    </Tooltip>
  );
};
export default forwardRef(IconButtonTooltip);
