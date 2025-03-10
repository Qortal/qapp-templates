import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./Routes.tsx";
import ThemeProviderWrapper from "./styles/theme/theme-provider.tsx";
import { GlobalProvider } from "qapp-core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider
      config={{
        auth: {
          balanceSetting: {
            interval: 180000,
            onlyOnMount: false,
          },
          authenticateOnMount: true,
        },
      }}
    >
      <ThemeProviderWrapper>
        <Routes />
      </ThemeProviderWrapper>
    </GlobalProvider>
  </StrictMode>
);
