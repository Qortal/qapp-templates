import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProviderWrapper from './styles/theme/theme-provider.tsx';
import {  Routes } from './Routes.tsx';
import './index.css';
import './i18n/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <Routes />
    </ThemeProviderWrapper>
  </StrictMode>
);
