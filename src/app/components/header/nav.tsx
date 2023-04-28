'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from '@/app/components';
import { recursive } from '@/app/fonts';
import styles from './header.module.scss';

const MobileMenuOpen = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className={classNames(
        styles.mobileMenuButton,
        styles.mobileMenuButtonOpen
      )}
      {...props}
    >
      <svg
        width='32'
        height='32'
        viewBox='0 0 16 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 2H15'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1 6H15'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1 10H15'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

const MobileMenuClose = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className={classNames(
        styles.mobileMenuButton,
        styles.mobileMenuButtonClose
      )}
      {...props}
    >
      <svg
        width='32'
        height='32'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1L15 15'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1 15L15 1'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={classNames(styles.backdrop, recursive.className)}
        hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.backdropInner}>
          <div className={styles.backdropName} onClick={() => setIsOpen(false)}>
            Max David
          </div>
          <div className={styles.backdropEmail}>
            <Link href='mailto:me@maxdavid.com'>me@maxdavid.com</Link>
          </div>
          <MobileMenuClose
            onClick={() => setIsOpen(false)}
            disabled={!isOpen}
          />
        </div>
      </div>
      <nav className={classNames(styles.nav, isOpen && styles.mobileOpen)}>
        <div className={styles.navInner}>
          <ul>
            <li className={styles.link}>
              <Link href='https://linkedin.com/in/maxdavid' target='linkedin'>
                linkedin
              </Link>
            </li>
            <li className={classNames(styles.link)}>
              <Link href='/resume'>resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <MobileMenuOpen onClick={() => setIsOpen(true)} disabled={isOpen} />
    </>
  );
};
