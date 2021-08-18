import Head from 'next/head';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';

const containerStyle = css`
  padding: ${tokens.spacing.large};
`;

const headingStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.bold};
  font-size: ${tokens.fontSizes.xxlarge};
  line-height: ${tokens.lineHeights.default};
  margin-top: 0;
  color: ${tokens.colors.navy};
`;

const paragraphStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.regular};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.relaxed};
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
