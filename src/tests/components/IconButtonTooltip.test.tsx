import IconButtonTooltip from "../../components/data-display/IconButton/IconButtonTooltip";
import { cleanup, render, waitFor } from "@testing-library/react";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "@testing-library/jest-dom/extend-expect";
import ThemeProvider from "../../providers/ThemeProvider/ThemeProvider";

describe("IconButtonTooltip test", () => {
  afterEach(cleanup);
  const iconButtonText = "IconButton test text";

  it(
    "renders IconButtonTooltip with accessibility property aria-label " + iconButtonText,
    async () => {
      // Arrange

      // Act
      const { getByTestId } = render(
        <ThemeProvider>
          <IconButtonTooltip text={iconButtonText} iconColor="red">
            <CloseOutlinedIcon />
          </IconButtonTooltip>
        </ThemeProvider>
      );

      // Assert
      await waitFor(() => {
        const StyledIconButtonElement = getByTestId("styledIconButton");
        expect(StyledIconButtonElement).toBeInTheDocument();
        expect(StyledIconButtonElement).toHaveAttribute("aria-label", iconButtonText);
      });
    }
  );

  it("IconButton allows for mui built-in prop secondary color", async () => {
    // Arrange

    // Act
    const { getByTestId } = render(
      <ThemeProvider>
        <IconButtonTooltip text={iconButtonText} iconColor="red" color="secondary">
          <CloseOutlinedIcon />
        </IconButtonTooltip>
      </ThemeProvider>
    );

    // Assert
    await waitFor(() => {
      const StyledIconButtonElement = getByTestId("styledIconButton");
      expect(StyledIconButtonElement).toBeInTheDocument();

      const isSecondaryClassesAdded = StyledIconButtonElement.className.includes(
        "MuiIconButton-colorSecondary"
      );
      expect(isSecondaryClassesAdded).toBeTruthy();
    });
  });
});
