import Head from 'next/head';
import { css } from '@emotion/react';

import { Button } from '@datacamp/waffles/button';

const containerStyle = css`
  padding: 24px;
`;

const headingStyle = css`
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.25;
  margin-top: 0;
`;

const paragraphStyle = css`
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
`;

export default function Home() {
  return (
    <div css={containerStyle}>
      <Head>
        <title>Waffles 2.0</title>
        <meta
          name="description"
          content="Evolution of Waffles design system."
        />
      </Head>
      <main>
        <h1 css={headingStyle}>Welcome to Waffles 2.0</h1>
        <p css={paragraphStyle}>
          It is still work in progress and subject to change.
        </p>
      </main>
      <Button>Click me!</Button>
    </div>
  );
}
