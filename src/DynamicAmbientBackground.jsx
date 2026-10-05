import React, { useEffect, useRef } from 'react';

export default function DynamicAmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width * 0.5,
      y: height * 0.3,
      targetX: width * 0.5,
      targetY: height * 0.3,
      active: false
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const glowBlobs = [
      {
        baseX: width * 0.25,
        baseY: height * 0.2,
        radius: Math.min(width, height) * 0.45,
        speedX: 0.0008,
        speedY: 0.0011,
        ampX: width * 0.2,
        ampY: height * 0.22,
        phase: 0,
        colorStart: 'rgba(230, 57, 86, 0.28)',
        colorMid: 'rgba(168, 28, 51, 0.16)',
        colorEnd: 'rgba(10, 4, 5, 0)'
      },
      {
        baseX: width * 0.75,
        baseY: height * 0.45,
        radius: Math.min(width, height) * 0.5,
        speedX: 0.0007,
        speedY: 0.0009,
        ampX: width * 0.25,
        ampY: height * 0.25,
        phase: Math.PI * 0.6,
        colorStart: 'rgba(168, 28, 51, 0.32)',
        colorMid: 'rgba(90, 12, 26, 0.2)',
        colorEnd: 'rgba(10, 4, 5, 0)'
      },
      {
        baseX: width * 0.4,
        baseY: height * 0.8,
        radius: Math.min(width, height) * 0.55,
        speedX: 0.0009,
        speedY: 0.0006,
        ampX: width * 0.28,
        ampY: height * 0.2,
        phase: Math.PI * 1.3,
        colorStart: 'rgba(244, 194, 194, 0.16)',
        colorMid: 'rgba(128, 15, 47, 0.22)',
        colorEnd: 'rgba(10, 4, 5, 0)'
      },
      {
        baseX: width * 0.85,
        baseY: height * 0.9,
        radius: Math.min(width, height) * 0.42,
        speedX: 0.0012,
        speedY: 0.0008,
        ampX: width * 0.18,
        ampY: height * 0.18,
        phase: Math.PI * 1.8,
        colorStart: 'rgba(230, 57, 86, 0.22)',
        colorMid: 'rgba(90, 12, 26, 0.18)',
        colorEnd: 'rgba(10, 4, 5, 0)'
      }
    ];

    const sparkles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.25 + 0.1,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayAmp: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      baseAlpha: Math.random() * 0.5 + 0.2
    }));

    let t = 0;

    const render = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      glowBlobs.forEach((blob) => {
        const curX = blob.baseX + Math.sin(t * blob.speedX + blob.phase) * blob.ampX;
        const curY = blob.baseY + Math.cos(t * blob.speedY + blob.phase) * blob.ampY;
        const curRadius = blob.radius + Math.sin(t * 0.0015 + blob.phase) * (blob.radius * 0.15);

        const grad = ctx.createRadialGradient(curX, curY, 0, curX, curY, curRadius);
        grad.addColorStop(0, blob.colorStart);
        grad.addColorStop(0.5, blob.colorMid);
        grad.addColorStop(1, blob.colorEnd);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(curX, curY, curRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (mouse.active || mouse.x > 0) {
        const cursorRadius = Math.min(width, height) * 0.35;
        const cursorGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, cursorRadius);
        cursorGrad.addColorStop(0, 'rgba(230, 57, 86, 0.18)');
        cursorGrad.addColorStop(0.4, 'rgba(168, 28, 51, 0.1)');
        cursorGrad.addColorStop(1, 'rgba(10, 4, 5, 0)');

        ctx.fillStyle = cursorGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, cursorRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      ctx.save();
      sparkles.forEach((s, idx) => {
        s.y -= s.speedY;
        s.x += Math.sin(t * s.swaySpeed + idx) * s.swayAmp * 0.4;

        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }

        const alphaPulse = s.baseAlpha + Math.sin(t * 0.03 + idx) * 0.2;
        const finalAlpha = Math.max(0.05, Math.min(0.8, alphaPulse));

        ctx.fillStyle = `rgba(244, 194, 194, ${finalAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        filter: 'blur(35px)',
        WebkitFilter: 'blur(35px)'
      }}
    />
  );
}
