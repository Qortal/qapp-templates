import { Routes } from './routes/Routes.tsx';
import { GlobalProvider } from 'qapp-core';
import { publicSalt } from './qapp-config.ts';

export const AppWrapper = () => {
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
      }}
    >
      <Routes />
    </GlobalProvider>
  );
};
