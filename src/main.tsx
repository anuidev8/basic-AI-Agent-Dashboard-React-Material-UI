import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {theme} from './presentation/theme/theme.ts';
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
    <App />
  </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
