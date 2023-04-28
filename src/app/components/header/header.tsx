import classNames from 'classnames';
import { redaction20, recursive } from '@/app/fonts';
import { Nav } from './nav';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={classNames(styles.header, redaction20.className)}>
      <div className={styles.inner}>
        <div className={classNames(styles.title, recursive.className)}>
          Max David
        </div>
        <Nav />
      </div>
    </header>
  );
};
