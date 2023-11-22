import { Theme } from "@mui/material/styles";

// Interface that should be used as prop inside "styled"
// Example: export const BreadcrumbsContainer = styled(Paper)(({ theme }: StyledProp) => ({ ...styling here });
export interface StyledProp {
  theme: Theme;
  children?: any;
}
