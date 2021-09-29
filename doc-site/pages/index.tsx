import Head from 'next/head';

import { Heading } from '@datacamp/waffles/heading';
import Layout from '../components/page-layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Waffles - DataCamp Design System</title>
        <meta
          name="description"
          content="Evolution of Waffles design system."
        />
      </Head>
      <Layout>
        <Heading size="xxlarge">Welcome to Waffles 2.0</Heading>
      </Layout>
    </>
  );
}
