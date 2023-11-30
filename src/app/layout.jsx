import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Inter } from 'next/font/google';
import AppProviders from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fruitzy',
  description: 'Generated by fruitzy app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
