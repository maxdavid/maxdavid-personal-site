import { Hero, Contact, Footer, Skills } from '@/app/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
