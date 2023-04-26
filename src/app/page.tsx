import { Hero } from '@/app/components/hero';
import { Contact } from '@/app/components/contact';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Contact />
    </main>
  );
}
