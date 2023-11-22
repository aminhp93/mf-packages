import { PaletteColorOptions } from "@mui/material/styles";

export interface ThemePalette {
  primaryColor: PaletteColorOptions;
  secondaryColor: PaletteColorOptions;
  // secondaryMainColor
  secondaryMainColor: string;
  // light
  layoutPrimaryColor: string;
  // medium
  layoutSecondaryColor: string;
  // dark
  layoutTertiaryColor: string;
  // contrast
  layoutContrastColor: string;
  // SideBar menu item color (active)
  activeMenuItemColor: string;
  // dark
  textPrimaryColor: string;
  // medium
  textSecondaryColor: string;
  // light
  textTertiaryColor: string;
  // lightest
  textQuaternaryColor: string;
  // link color
  textLinkColor: string;
  // Tree-select border color
  treeBorderColor: string;
  // Input focus border color
  inputFocusBorderColor: string;
  // Tree-select node item background color
  nodeItemBackgroundColor: string;
  // border color
  borderColor: string;
  // defaultBorer
  defaultBorder: string;
  // outlineBorder
  outlineBorder: string;
  // errorBorder
  errorBorder: string;
  // errorColor
  errorColor: string;
  // errorBackgroundColor
  errorBackgroundColor: string;
  // successColor
  successColor: string;
  // ratingActiveColor
  ratingActiveColor: string;
  // mainColor
  mainColor: string;
  // infoDarkColor
  infoDarkColor: string;
  // Button border color
  buttonBorderColor: string;
  // error light color
  errorLightColor: string;
  // error dark color
  errorDarkColor: string;
  // start icon yellow color
  starIconColor: string;
  // Clear button color
  clearButtonColor: string;

  // Disabled button color
  disabledButtonColor: string;
  // Disable button border color
  disabledButtonBorderColor: string;

  // dropdown selection
  dropdownSelections: {
    // background color
    backgroundColor: string;
    // Background color of the tabs
    tabsBackgroundColor: string;
    // Background color of the selected organization item
    selectedItemBackgroundColor: string;
    // Selected item color
    selectedItemColor: string;
    // Cancel Icon background color
    cancelIconBackgroundColor: string;
    // Tab item background color
    tabItemBackgroundColor: string;
    // Tab active item color
    tabActiveItemColor: string;
    // Icon color
    iconColor: string;
    // Add icon color
    addIconColor: string;
    // Add icon background color
    addIconBackgroundColor: string;
    // Add icon hover color
    addIconHoverColor: string;
    // Select button background color
    selectButtonBackgroundColor: string;
    // Item background color
    itemBackgroundColor: string;
  };

  util: {
    favorite: string;
    expert: string;
    semantic: string;
    topology: string;
    membership: string;
    error: string;
  };
}
