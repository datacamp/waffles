import Head from 'next/head';

import Workbench from '../workbench';

export default function Home() {
  return (
    <>
      <Head>
        <title>Waffles - Workbench</title>
        <meta
          name="description"
          content="Interactive playground to develop and polish Waffles components."
        />
      </Head>
      <Workbench />
    </>
  );
}
