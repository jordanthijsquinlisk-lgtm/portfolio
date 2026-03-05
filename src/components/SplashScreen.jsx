import { useEffect, useRef } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';
import { gsap, canAnimate } from '../animations';

export default function SplashScreen({ onDone, onExit }) {
  const overlayRef = useRef(null);
  const gradientWrapRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!canAnimate()) {
      onExit();
      onDone();
      return;
    }

    // Start gradient fully clipped — hidden below the bottom edge
    gsap.set(gradientWrapRef.current, { clipPath: 'inset(100% 0 0 0)' });

    const tl = gsap.timeline();

    tl.to(gradientWrapRef.current, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.8,
        ease: 'power2.inOut',
        delay: 0.4,
      })
      .to(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      }, '-=0.5')
      .add(() => onExit())
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: onDone,
      }, '+=0.1');

    return () => tl.kill();
  }, [onDone, onExit]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'var(--color-primary)',
        pointerEvents: 'none',
      }}
    >
      {/* Gradient behind — rises from the bottom */}
      <div
        ref={gradientWrapRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <ShaderGradientCanvas style={{ width: '100%', height: '100%' }}>
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
      </div>

      {/* Logo + name on top — fades as gradient fills the screen */}
      <div
        ref={contentRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          zIndex: 1,
        }}
      >
        <img
          src="/logo.svg"
          alt=""
          style={{ width: 120, height: 120, objectFit: 'contain' }}
        />
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 64,
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--color-text)',
          letterSpacing: '-0.02em',
        }}>
          Jordan Quinlisk
        </span>
      </div>
    </div>
  );
}
