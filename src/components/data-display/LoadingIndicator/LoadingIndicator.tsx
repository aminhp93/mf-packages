import React from "react";
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import { SpinnerContainer } from "./LoadingIndicator.styles";

export interface ILoadingIndicatorProps {
  isLoading: boolean;
}

const LoadingIndicator: React.FC<ILoadingIndicatorProps> = ({
  isLoading,
}: ILoadingIndicatorProps) => {
  const theme: any = useTheme();
  return (
    <>
      {isLoading && (
        <SpinnerContainer>
          <Fade
            in={isLoading}
            style={{
              position: "absolute",
              top: "50%",
              transitionDelay: "0ms",
            }}
            unmountOnExit
          >
            <CircularProgress
              sx={{ color: theme.palette.customTheme.layoutQuaternaryColor }}
              data-testid="circularProgress"
            />
          </Fade>
        </SpinnerContainer>
      )}
    </>
  );
};

export default LoadingIndicator;
