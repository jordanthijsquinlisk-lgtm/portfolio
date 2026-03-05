import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* CSS gradient background — replaces ShaderGradient (no GPU heat) */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 110% 65% at 5% 105%, #004CC1 0%, rgba(0,76,193,0.65) 22%, rgba(0,76,193,0.18) 48%, transparent 68%),
            radial-gradient(ellipse 65% 45% at 102% -5%, rgba(0,76,193,0.14) 0%, transparent 52%),
            #FFF8EB
          `,
        }}
      />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
