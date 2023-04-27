'use client';

import Image from 'next/image';
// import portrait from './portrait-p3.jpg';
import portrait from './site-portrait.jpg';
import { DrawingCanvas } from './canvas';
import styles from './portrait.module.scss';

export const Portrait = () => {
  return (
    <div className={styles.portrait}>
      <Image
        src={portrait}
        alt='Portrait of Max David'
        className={styles.image}
        width={375}
        height={468}
        quality={100}
        priority
      />
      <aside className={styles.blendOverlay} />
      <DrawingCanvas />
    </div>
  );
};
