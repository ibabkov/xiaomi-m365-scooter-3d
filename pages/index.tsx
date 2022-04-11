import type { NextPage } from 'next';
import Head from 'next/head';

import { Application } from '../src/containers/Application';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Xiaomi M365 Scooter 3D</title>
        <meta
          name="description"
          content="Xiaomi M365 Scooter 3D visualization with scroll-based control"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Application />
    </>
  );
};

export default Home;
