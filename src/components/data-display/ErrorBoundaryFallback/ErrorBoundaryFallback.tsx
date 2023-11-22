import React, { useState } from "react";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Button from "@mui/material/Button";
import { FallbackProps } from "react-error-boundary";
import LoadingIndicator from "../LoadingIndicator";
import {
  ActionContainer,
  BackDrop,
  Container,
  Group,
  IconContainer,
  WarningIcon,
} from "./ErrorBoundaryFallback.styles";
import { translate } from "../../../translation/translate";

const ErrorBoundaryFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const [isErrorPanelOpen, setIsErrorPanelOpen] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const reset = () => {
    setIsResetting(true);
    setTimeout(() => {
      resetErrorBoundary();
    }, 1000);
  };

  return (
    <>
      {isResetting ? <BackDrop /> : ""}
      <LoadingIndicator isLoading={isResetting} />
      <Container>
        <Group>
          <IconContainer>
            <WarningIcon />
          </IconContainer>
          <ActionContainer>
            <Button
              onClick={() => {
                reset();
              }}
              variant="outlined"
              startIcon={<RefreshOutlinedIcon />}
            >
              {translate("try_again")}
            </Button>
            <Button
              onClick={() => {
                reset();
              }}
              variant="outlined"
              startIcon={<PestControlOutlinedIcon />}
              color="error"
              disabled={true}
            >
              {translate("report_bug")}
            </Button>
          </ActionContainer>

          <Button
            onClick={() => {
              setIsErrorPanelOpen(!isErrorPanelOpen);
            }}
            variant="text"
          >
            {isErrorPanelOpen ? translate("seeLess") : translate("seeMore")}
          </Button>
          {isErrorPanelOpen ? (
            <div style={{ maxWidth: "calc(100vw - 1rem)" }}>
              <code>{error.stack}</code>
            </div>
          ) : (
            ""
          )}
        </Group>
      </Container>
    </>
  );
};

export default ErrorBoundaryFallback;
