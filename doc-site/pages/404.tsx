import Head from 'next/head';
import Link from 'next/link';

import { Display } from '@datacamp/waffles/display';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';
import { ContentContainer } from '@datacamp/waffles/content-container';

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Waffles - Page not Found</title>
        <meta
          name="description"
          content="Unfortunately this page could not be found."
        />
      </Head>
      <ContentContainer>
        <Display>404</Display>
        <Heading size="xxlarge">Page not Found</Heading>
        <Paragraph>
          Unfortunately, we couldn&apos;t find the page you are looking for.
        </Paragraph>
        <Link href="/" passHref>
          <Button variant="secondary" as="a">
            Go to Home Page
          </Button>
        </Link>
      </ContentContainer>
    </>
  );
}
