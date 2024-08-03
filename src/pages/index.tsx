import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { Application } from '../containers/Application';
import { CanvasFallback } from '../components/CanvasFallback';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Xiaomi M365 Scooter 3D</title>
				<meta name="description" content="Xiaomi M365 Scooter 3D visualization with scroll-based control" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<React.Suspense fallback={<CanvasFallback />}>
				<Application />
			</React.Suspense>
		</>
	);
};

export default Home;
