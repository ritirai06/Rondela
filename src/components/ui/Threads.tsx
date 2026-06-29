// @ts-nocheck
import { useEffect, useRef } from 'react';

const Threads = ({
  amplitude = 0.8,
  distance = 0.2,
  enableMouseInteraction = true,
  opacity = 0.15,
  color = '255, 255, 255'
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let width, height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    if (enableMouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Interpolate mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      time += 0.005;

      const linesCount = 25;
      
      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();
        
        for (let x = 0; x < width; x += 10) {
          // Complex sine waves for organic thread movement
          const noise = Math.sin(x * 0.005 + time + i * 0.5) * 50 * amplitude;
          const noise2 = Math.cos(x * 0.008 - time * 0.8 + i) * 30 * amplitude;
          
          let y = height / 2 + noise + noise2 + (i - linesCount/2) * (distance * 100);

          if (enableMouseInteraction) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 300) {
              const repel = (300 - dist) / 300;
              y -= dy * repel * 0.5;
            }
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [amplitude, distance, enableMouseInteraction, opacity, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

export default Threads;
