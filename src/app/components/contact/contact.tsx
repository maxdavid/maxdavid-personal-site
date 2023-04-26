import classNames from 'classnames';
import { Link } from '@/app/components/link';
import { recursive } from '@/app/fonts';
import styles from './contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={classNames(styles.email, recursive.className)}>
        <Link href='mailto:me@maxdavid.com'>me@maxdavid.com</Link>
      </div>
    </section>
  );
};
