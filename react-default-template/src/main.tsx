import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes } from './Routes.tsx'
import ThemeProviderWrapper from './styles/theme/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviderWrapper>
    <Routes />
    </ThemeProviderWrapper>
  </StrictMode>,
)
