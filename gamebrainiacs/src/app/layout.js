'use client';

import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import '../../node_modules/react-modal-video/css/modal-video.css';
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <AuthProvider>
          <Providers>
            <Header />
            {children}
            <ScrollToTop />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}

import { Providers } from './providers';
