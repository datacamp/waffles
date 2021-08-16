import Head from 'next/head';

import Workbench from '../workbench';
import Main from '../components/main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Waffles 2.0 Playground</title>
        <meta
          name="description"
          content="Interactive playground to develop and polish Waffles components."
        />
      </Head>
      <Main>
        <Workbench />
      </Main>
    </>
  );
}
