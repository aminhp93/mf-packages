import { IconButtonProps } from "@mui/material/IconButton";
import { CSSObject } from "@mui/material/styles";
import React from "react";
import { Elevations } from "../../../enums/darkThemeElevations";
import { StyledIconButton } from "./IconButton.styles";

export interface CustomIconButtonProps extends IconButtonProps {
  onClick: (e: any) => void;
  onKeyPress?: (e: any) => void;
  iconColor?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  elevation?: Elevations;
  additionalCSS?: CSSObject;
}

const IconButton: React.FC<CustomIconButtonProps> = ({
  iconColor,
  onClick,
  onKeyPress,
  children,
  ariaLabel,
  elevation,
  additionalCSS,
  ...rest
}: CustomIconButtonProps) => {
  return (
    <StyledIconButton
      onClick={onClick}
      onKeyPress={onKeyPress}
      aria-label={ariaLabel}
      iconColor={iconColor}
      elevation={elevation}
      additionalCSS={additionalCSS}
      {...rest}
    >
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
