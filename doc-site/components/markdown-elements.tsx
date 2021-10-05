import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import slugify from 'slugify';

import { tokens } from '@datacamp/waffles/tokens';
import { Code } from '@datacamp/waffles/code';
import { CodeBlock } from '@datacamp/waffles/code-block';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link as LinkBase } from '@datacamp/waffles/link';

import textFromChildren from '../helpers/text-from-children';
import Bookmark from './bookmark';
import List from './list';

// Use custom Waffles components in markdown

type TextProps = {
  children: React.ReactNode;
};

function H1({ children }: TextProps) {
  return (
    <>
      <Head>
        <title key="title">Waffles - {children}</title>
      </Head>
      <Heading size="xxlarge">{children}</Heading>
    </>
  );
}

const secondaryHeadingStyle = css`
  margin-top: ${tokens.spacing.large};
`;

// Allow secondary heading to be bookmarked
function H2({ children }: TextProps) {
  const headingId = slugify(textFromChildren(children), { lower: true });

  return (
    <Heading size="xlarge" id={headingId} css={secondaryHeadingStyle}>
      {children}
      <Bookmark targetId={headingId} />
    </Heading>
  );
}

function H3({ children }: TextProps) {
  return <Heading size="large">{children}</Heading>;
}

function H4({ children }: TextProps) {
  return <Heading size="medium">{children}</Heading>;
}

type RegularLinkProps = {
  children: React.ReactNode;
  href?: string;
};

function RegularLink({ children, href }: RegularLinkProps) {
  return href ? (
    <Link href={href} passHref>
      <LinkBase>{children}</LinkBase>
    </Link>
  ) : (
    <LinkBase>{children}</LinkBase>
  );
}

const markdownElements = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  a: RegularLink,
  code: CodeBlock,
  inlineCode: Code,
  ul: List,
  li: List.Item,
};

export default markdownElements;
