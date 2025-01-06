// src/embed.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@/ThemeProvider.jsx";
import "@/assets/css/font.css";
// import "@/assets/css/reset.css";
import "@/assets/css/index.css";
import App from '@/pages/Index';

const container = document.createElement('div');
container.id = 'live-chat-root';
document.body.appendChild(container);

createRoot(container).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);