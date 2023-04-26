'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './portrait.module.scss';

export const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const isDrawingRef = useRef(isDrawing);
  useEffect(() => {
    isDrawingRef.current = isDrawing;
  }, [isDrawing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgb(255, 31, 0)';
      ctx.lineJoin = 'miter';
      ctx.lineCap = 'square';
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const startDrawing = (event: MouseEvent) => {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    };

    const draw = (event: MouseEvent) => {
      if (!isDrawingRef.current) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
      ctx.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};
