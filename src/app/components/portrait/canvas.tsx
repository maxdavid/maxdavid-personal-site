'use client';

import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './portrait.module.scss';

const EraseButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
  }
) => {
  const { active, ...rest } = props;

  return (
    <button
      className={
        active
          ? classNames(styles.eraseButton, styles.eraseButtonActive)
          : styles.eraseButton
      }
      {...rest}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='none'
        viewBox='0 0 20 20'
      >
        <g clipPath='url(#a)'>
          <rect
            width='9'
            height='18'
            x='13'
            y='.5'
            fill='var(--theme-foreground)'
            stroke='#FFF'
            strokeWidth='1.5'
            rx='1.5'
            transform='rotate(45 13 .5)'
          />
          <path
            stroke='#FFF'
            strokeLinecap='round'
            strokeWidth='1.5'
            d='M6.6 18.97h12'
          />
          <path
            stroke='var(--theme-background)'
            strokeWidth='1.5'
            d='m4.53 9.07 6.364 6.364'
          />
        </g>
        <defs>
          <clipPath id='a'>
            <path fill='#fff' d='M0 0h20v20H0z' />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export const DrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startedDrawing, setStartedDrawing] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
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
      setStartedDrawing(true);
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

  useEffect(() => {
    if (startedDrawing && !isDrawing) {
      setIsCanvasEmpty(false);
    }
  }, [startedDrawing, isDrawing]);

  const handleErase = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setStartedDrawing(false);
    setIsCanvasEmpty(true);
  };

  return (
    <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <EraseButton onClick={handleErase} active={!isCanvasEmpty} />
    </div>
  );
};
