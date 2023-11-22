import DropdownTreeSelect from "react-dropdown-tree-select";
import { styled, lighten } from "@mui/material/styles";

export const DropdownTreeSelectStyled = styled(DropdownTreeSelect)(({ theme }) => ({
  ".tag-item span": {
    background: lighten(theme.palette.customTheme.layoutSecondaryColor, 0.05),
  },
  ".tag-item input": {
    background: lighten(theme.palette.customTheme.layoutSecondaryColor, 0.05),
  },

  ".dropdown-trigger": {
    borderRadius: "0.25rem",
  },
  ".search": {
    borderRadius: "0.25rem",
    // minWidth: "20rem",
    border: "none !important",
  },
  ".dropdown-content": {
    background: `${lighten(theme.palette.customTheme.layoutSecondaryColor, 0.05)} !important`,
    width: "100%",
  },
  "& .toggle.collapsed:after": {
    border: "solid",
    borderColor: theme.palette.customTheme.treeBorderColor,
    borderWidth: "0 0.125rem 0.125rem 0",
    display: "inline-block",
    padding: theme.spacing(0.75),
    transform: "rotate(45deg)",
  },
  "& .toggle.expanded:after": {
    border: "solid",
    borderColor: theme.palette.customTheme.treeBorderColor,
    borderWidth: "0 0.125rem 0.125rem 0",
    display: "inline-block",
    padding: theme.spacing(0.75),
    transform: "rotate(-135deg)",
  },
  "& .node": {
    minHeight: "3rem",
    "&:hover": {
      backgroundColor: theme.palette.customTheme.nodeItemBackgroundColor,
    },
  },
  "& .node.focused": {
    backgroundColor: theme.palette.customTheme.nodeItemBackgroundColor,
  },
  "& .tag-list": {
    display: "flex",
  },
  "& .toggle": {
    width: "1.5rem",
    height: "1.5rem",
    margin: theme.spacing(2) + " " + theme.spacing(1),
  },
  "& .tag-item input": {
    background: "transparent",
    color: theme.palette.customTheme.textPrimaryColor,
    fontSize: "1rem",
    fontWeight: 400,
  },
  "& .radio-item": {
    width: "1.063rem",
    height: "1.063rem",
    margin: theme.spacing(2),
  },
  "& .node-label": {
    padding: theme.spacing(2) + " " + theme.spacing(1),
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  "& .dropdown": {
    "& .dropdown-trigger": {
      display: "flex",
      padding: 0,
    },
  },
  "& .dropdown-trigger.arrow.bottom:after": {
    borderLeft: "0.313rem solid transparent",
    borderRight: "0.313rem solid transparent",
    borderTop: "0.313rem solid " + theme.palette.customTheme.treeBorderColor,
    position: "absolute",
    bottom: "40%",
    right: "0%",
  },
  "& .dropdown .dropdown-trigger.arrow.top:after": {
    borderLeft: "0.313rem solid transparent",
    borderRight: "0.313rem solid transparent",
    borderBottom: "0.313rem solid " + theme.palette.customTheme.treeBorderColor,
    position: "absolute",
    bottom: "40%",
    right: "0%",
  },
}));
