import type { Metadata } from 'next';
import { Inter, Dosis } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import logo from '../img/logo.svg';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dosis = Dosis({ subsets: ['latin'], variable: '--font-dosis' });

export const metadata: Metadata = {
  title: 'MetaDiaria',
  description: 'Gerenciador de habitos diarios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${dosis.variable} ${inter.variable} flex items-center flex-col bg-neutral-900 h-screen`}
      >
        <header className='h-24 flex items-center'>
          <Image src={logo} alt='MetaDiaria' className='w-48' />
        </header>
        {children}
      </body>
    </html>
  );
}
