import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProviderWrapper from './styles/theme/theme-provider.tsx';
import { AppWrapper } from './AppWrapper.tsx';
import './index.css';
import './i18n/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <AppWrapper />
    </ThemeProviderWrapper>
  </StrictMode>
);
