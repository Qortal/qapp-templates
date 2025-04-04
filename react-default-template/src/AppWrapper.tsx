import { Routes } from "./Routes";
import { GlobalProvider } from "qapp-core";
import { publicSalt } from "./qapp-config.ts";
import { EnumTheme, useSystemState } from "./state/global/system";
import { darkTheme, lightTheme } from "./styles/theme/theme";

export const AppWrapper = () => {
  const theme = useSystemState().theme;
  return (
    <GlobalProvider
      config={{
        auth: {
          balanceSetting: {
            interval: 180000,
            onlyOnMount: false,
          },
          authenticateOnMount: true,
        },
        publicSalt: publicSalt,
        appName: "q-search",
      }}
      parentTheme={theme === EnumTheme.LIGHT ? lightTheme : darkTheme}
    >
      <Routes />
    </GlobalProvider>
  );
};
