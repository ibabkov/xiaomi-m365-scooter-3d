import '../styles/globals.css';
import '../styles/theme.css';

import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';

import { APP_DESCRIPTION, DISPLAY_APP_TITLE } from '../constants/app';
import { VIEWPORT_SETTINGS } from '../constants/viewport';
import { StatusPage } from '../components/StatusPage';
import { Layout } from '../components/Layout';

function Application({ Component, pageProps }: AppProps) {
	return (
		<ErrorBoundary fallback={<StatusPage title={'500'} description={"This page isn't working"} />}>
			<Head>
				<title>{DISPLAY_APP_TITLE}</title>
				<meta name="description" content={APP_DESCRIPTION} />
				<meta name="viewport" content={VIEWPORT_SETTINGS} />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ErrorBoundary>
	);
}

export default Application;
