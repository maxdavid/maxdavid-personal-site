import { Hero, Contact, Footer } from '@/app/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
