import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ShaderGradientCanvas
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={3.61}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#FFF8EB"
          color2="#FFF8EB"
          color3="#004CC1"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          pixelDensity={0.9}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="waterPlane"
          uAmplitude={5.6}
          uDensity={1.1}
          uFrequency={5.5}
          uSpeed={0.1}
          uStrength={1.3}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
