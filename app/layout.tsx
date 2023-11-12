'use client'

import './globals.scss';

import { Provider } from 'react-redux';
import { Raleway } from 'next/font/google';
import { store } from './store';

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
