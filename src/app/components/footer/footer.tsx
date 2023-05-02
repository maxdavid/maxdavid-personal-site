import classNames from 'classnames';
import { Link } from '@/app/components';
import { redaction35 } from '@/app/fonts';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classNames(styles.footer, redaction35.className)}>
      <Link className={styles.link} href='http://butt.pics'>
        miss the old site?
      </Link>
    </footer>
  );
};
