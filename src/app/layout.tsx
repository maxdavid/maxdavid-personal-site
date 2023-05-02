import { Analytics } from '@vercel/analytics/react';
import { inter } from '@/app/fonts';
import { Header } from './components/header/header';
import './styles/reset.css';
import './styles/globals.scss';
import './styles/button.scss';

export const metadata = {
  title: 'Max David',
  description: 'Full-stack developer with a focus on frontend design',
  themeColor: '#ffffff',
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
