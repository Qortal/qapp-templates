import { Routes } from './routes/Routes.tsx';
import { GlobalProvider } from 'qapp-core';
import { publicSalt } from './qapp-config.ts';
import { useLocation, useNavigate } from 'react-router-dom';

export const AppWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      navigate={navigate}
      location={location}
    >
      <Routes />
    </GlobalProvider>
  );
};
