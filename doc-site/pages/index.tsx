import Head from 'next/head';

import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
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
        <Paragraph size="large">
          🚧 This page is <strong>under construction</strong>.
        </Paragraph>
      </Layout>
    </>
  );
}
