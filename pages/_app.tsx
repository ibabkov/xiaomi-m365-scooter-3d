import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { APP_DESCRIPTION, DISPLAY_APP_TITLE } from '../src/constants/app';
import { VIEWPORT_SETTINGS } from '../src/constants/viewport';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{DISPLAY_APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content={VIEWPORT_SETTINGS} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
