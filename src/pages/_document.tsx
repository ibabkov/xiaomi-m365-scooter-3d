import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';

import { LANGUAGE } from '../constants/app';

function Document() {
	return (
		<Html lang={LANGUAGE}>
			<Head>
				<link rel="icon" href={'/favicon.ico'} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;
