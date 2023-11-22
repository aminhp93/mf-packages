import LoadingIndicator from "../../components/data-display/LoadingIndicator/LoadingIndicator";
import { cleanup, render, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ThemeProvider from "../../providers/ThemeProvider/ThemeProvider";

describe("LoadingIndicator test", () => {
  afterEach(cleanup);

  it("Loading indicator shows spinner when isLoading=true", async () => {
    // Arrange

    // Act
    const { getByTestId } = render(
      <ThemeProvider>
        <LoadingIndicator isLoading={true} />
      </ThemeProvider>
    );

    // Assert
    await waitFor(() => {
      const CircularProgressElement = getByTestId("circularProgress");
      expect(CircularProgressElement).toBeInTheDocument();
    });
  });

  it("Loading indicator is hidden when isLoading=false", async () => {
    // Arrange

    // Act
    const comp = render(
      <ThemeProvider>
        <LoadingIndicator isLoading={false} />
      </ThemeProvider>
    );

    // Assert
    await waitFor(() => {
      const element = comp.queryAllByTestId("circularProgress");
      expect(element).toStrictEqual([]);
    });
  });
});
