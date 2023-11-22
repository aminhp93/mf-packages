import React from "react";
import { useThemeContext } from "../../../hooks";
import { StyledCard, StyledCardContent, StyledCardHeader } from "./WidgetCard.styles";

interface WidgetCardProps {
  title: string;
  children: any;
  Icon: any;
}

const WidgetCard = ({ title, children, Icon }: WidgetCardProps) => {
  const themeMode = useThemeContext()[0];

  return (
    <StyledCard themeMode={themeMode}>
      <StyledCardHeader avatar={Icon && <Icon />} title={title} themeMode={themeMode} />

      <StyledCardContent themeMode={themeMode}>{children}</StyledCardContent>
    </StyledCard>
  );
};

export default WidgetCard;
