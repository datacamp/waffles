import Link from 'next/link';
import Head from 'next/head';

import { Code } from '@datacamp/waffles/code';
import { CodeBlock } from '@datacamp/waffles/code-block';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link as LinkBase } from '@datacamp/waffles/link';

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

function H2({ children }: TextProps) {
  return <Heading size="xlarge">{children}</Heading>;
}

function H3({ children }: TextProps) {
  return <Heading size="large">{children}</Heading>;
}

function H4({ children }: TextProps) {
  return <Heading size="medium">{children}</Heading>;
}

type RegularLinkProps = {
  children: React.ReactNode;
  href: string;
};

function RegularLink({ children, href }: RegularLinkProps) {
  return (
    <Link href={href} passHref>
      <LinkBase>{children}</LinkBase>
    </Link>
  );
}

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  a: RegularLink,
  code: CodeBlock,
  inlineCode: Code,
};
