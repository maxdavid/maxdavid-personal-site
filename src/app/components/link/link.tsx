import classNames from 'classnames';
import styles from './link.module.scss';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: React.ReactNode;
  target?: string;
}

export const Link = ({ href, children, target, ...rest }: LinkProps) => {
  return (
    <a
      className={target ? styles.externalLink : styles.link}
      href={href}
      target={target}
      {...rest}
    >
      {children}
      {target && (
        <svg
          className={styles.arrow}
          height='12'
          width='12'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            className={styles.arrowLine}
            x1='0'
            y1='8'
            x2='12'
            y2='8'
            strokeWidth='2'
            stroke='currentColor'
          ></line>
          <polyline
            className={styles.arrowHead}
            points='6 2, 12 8, 6 14'
            strokeWidth='2'
            stroke='currentColor'
          />
        </svg>
      )}
    </a>
  );
};
