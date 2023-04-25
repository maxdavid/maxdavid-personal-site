import { Hero } from '@/app/components/hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
