import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/ThemeProvider.jsx";
import "@/assets/css/font.css";
import "@/assets/css/reset.css";
import "@/assets/css/index.css";
import App from './pages/Index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StrictMode>,
)
