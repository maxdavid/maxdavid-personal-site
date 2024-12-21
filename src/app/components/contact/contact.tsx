import classNames from 'classnames';
import { Link } from '@/app/components/link';
import { recursive, redaction20 } from '@/app/fonts';
import styles from './contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={classNames(styles.title, redaction20.className)}>
        Current Role
      </div>
      <div className={classNames(styles.cta, recursive.className)}>
        UX Engineer @ Google, supporting research & design tools.
      </div>
      <hr className={styles.divider} />
      {/*
      <div className={classNames(styles.emailTitle, recursive.className)}>
        Sound like you? Let&apos;s talk:
      </div>
      */}
      <div className={classNames(styles.email, recursive.className)}>
        <Link href='mailto:me@maxdavid.com'>me@maxdavid.com</Link>
      </div>
    </section>
  );
};
