import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import slugify from 'slugify';

import { tokens } from '@datacamp/waffles/tokens';
import { Code as CodeBase } from '@datacamp/waffles/code';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph as ParagraphBase } from '@datacamp/waffles/paragraph';
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

const headingStyle = css`
  margin-top: ${tokens.spacing.medium};

  &:first-of-type {
    margin-top: ${tokens.spacing.small};
  }
`;

function H3({ children }: TextProps) {
  return (
    <Heading size="large" css={headingStyle}>
      {children}
    </Heading>
  );
}

function H4({ children }: TextProps) {
  return (
    <Heading size="medium" css={headingStyle}>
      {children}
    </Heading>
  );
}

const paragraphStyle = css`
  h1 + & {
    font-size: ${tokens.fontSizes.large};
  }
`;

function Paragraph({ children }: TextProps) {
  return <ParagraphBase css={paragraphStyle}>{children}</ParagraphBase>;
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

function Code({ children }: TextProps) {
  return <CodeBase>{children}</CodeBase>;
}

const markdownElements = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  a: RegularLink,
  code: Code,
  inlineCode: Code,
  ul: List,
  li: List.Item,
};

export default markdownElements;
