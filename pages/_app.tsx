import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
