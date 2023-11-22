import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const IconContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const WarningIcon = styled(ErrorOutlineIcon)(({ theme }: any) => ({
  color: theme.palette.customTheme?.textTertiaryColor,

  [theme.breakpoints.up("xs")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "10rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "15rem",
  },
}));

export const ActionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "0.5rem",

  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const Container = styled("div")(() => ({
  display: "flex",
  flexGrow: "1",
  flexDirection: "row",
  justifyContent: "center",
  paddingBottom: "5rem",
}));

export const Group = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",
}));

export const ErrorTitle = styled("div")(({ theme }: any) => ({
  display: "flex",
  justifyContent: "center",
  color: theme.palette.customTheme?.textSecondaryColor,
  whiteSpace: "nowrap",

  [theme.breakpoints.up("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));

export const BackDrop = styled("div")(() => ({
  width: "calc(100vw - 0.5rem)",
  height: "calc(100vh - 0.5rem)",
  backgroundColor: "rgba(0,0,0,0.25)",
  position: "absolute",
  top: "0",
  left: "0",
}));

export const InfoCard = styled(Card)(({ theme }: any) => ({
  boxShadow: theme.palette.customTheme?.boxShadow,
  border: theme.palette.customTheme?.border,
  borderRadius: theme.palette.customTheme?.outerBorderRadius,
  padding: "1rem",
}));
