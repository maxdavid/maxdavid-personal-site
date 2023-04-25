'use client';

import classNames from 'classnames';
import { Link } from '@/app/components';
import { useState } from 'react';
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

  return (
    <>
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
          <MobileMenuClose
            onClick={() => setIsOpen(false)}
            disabled={!isOpen}
          />
        </div>
      </nav>
      <MobileMenuOpen onClick={() => setIsOpen(true)} disabled={isOpen} />
    </>
  );
};
