'use client';

import Image from 'next/image';
import portrait from './portrait-p3.jpg';
import { DrawingCanvas } from './canvas';
import styles from './portrait.module.scss';

export const Portrait = () => {
  return (
    <div className={styles.portrait}>
      <Image
        src={portrait}
        alt='Portrait of Max David'
        className={styles.image}
        width={500}
        height={500}
      />
      <DrawingCanvas />
    </div>
  );
};
