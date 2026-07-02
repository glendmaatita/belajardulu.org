import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setupPWA } from './lib/pwa'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Daftarkan service worker + tegakkan TTL cache 24 jam (PWA installable).
setupPWA()
