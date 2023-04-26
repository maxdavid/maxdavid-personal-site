import classNames from 'classnames';
import { redaction20, recursive } from '@/app/fonts';
import { Portrait } from '@/app/components/portrait';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Portrait />
      <div className={classNames(styles.intro, recursive.className)}>
        <div className={classNames(styles.greeting, redaction20.className)}>
          Hello,
        </div>
        <div>
          I&apos;m a full-stack web developer with a focus on front-end &
          product design. I enjoy perfecting interaction details and creating
          consistent systems throughout my work.
        </div>
        <div className={classNames(styles.location, redaction20.className)}>
          Currently located in New York City.
        </div>
      </div>
    </section>
  );
};
