import classNames from 'classnames';
import { redaction20, redaction35, redaction50, recursive } from '@/app/fonts';
import styles from './skills.module.scss';

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={classNames(styles.header, redaction35.className)}>
        <h2>What&apos;s Cooking</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>wat</div>
        <div className={styles.gridItem}>wat</div>
      </div>
    </section>
  );
};
