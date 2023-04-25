import { inter } from '@/app/fonts';
import { Header } from './components/header/header';
import './styles/reset.css';
import './styles/globals.css';
import './styles/button.scss';

export const metadata = {
  title: 'Max David',
  description: 'Full-stack developer with a focus on frontend design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='page-container'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
