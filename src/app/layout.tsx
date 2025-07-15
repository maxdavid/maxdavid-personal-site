import { Analytics } from '@vercel/analytics/react';
import { inter } from '@/app/fonts';
import { Header } from './components/header/header';
import './styles/reset.css';
import './styles/globals.scss';
import './styles/button.scss';

export const metadata = {
  title: 'Max David',
  description: 'UX Engineer & Developer',
  themeColor: '#ffffff',
  openGraph: {
    title: 'Max David',
    description: 'UX Engineer & Developer',
    siteName: 'Max David',
    images: [
      {
        url: 'https://maxdavid.com/og.jpg',
        width: 1200,
        height: 1500,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max David',
    description: 'UX Engineer & Developer',
    siteId: '15980212',
    creator: '@pipecork',
    creatorId: '15980212',
    images: ['https://maxdavid.com/twitter.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <div className='page-container'>{children}</div>
      </body>
      <Analytics />
    </html>
  );
}
