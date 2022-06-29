import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import useOnScreen from 'hooks/use-intersection';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph as ParagraphBase } from '@datacamp/waffles/paragraph';
import { Link as LinkBase } from '@datacamp/waffles/link';
import { Heading } from '@datacamp/waffles/heading';
import { CodeBlock as CodeBlockBase } from '@datacamp/waffles/code-block';
import { Code as CodeBase } from '@datacamp/waffles/code';

import textFromChildren from '../helpers/text-from-children';
import slugify from '../helpers/slugify';
import { useAddTableOfContentsEntry } from '../context/table-of-contents-context';

import TableBase from './table';
import List from './list';
import Bookmark from './bookmark';

// Use custom Waffles components in markdown

type ContentProps = {
  children: React.ReactNode;
};

function H1({ children }: ContentProps) {
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

// Allow secondary heading to be bookmarked and add them to table of contents, along with setting active section
function H2({ children }: ContentProps) {
  const textContent = textFromChildren(children);

  return (
    <Heading
      size="xlarge"
      id={slugify(textContent)}
      css={secondaryHeadingStyle}
    >
      {children}
      <Bookmark targetId={slugify(textContent)} />
    </Heading>
  );
}

const headingStyle = css`
  margin-top: ${tokens.spacing.medium};

  h2 + &,
  h3 + & {
    margin-top: ${tokens.spacing.small};
  }
`;

function H3({ children }: ContentProps) {
  return (
    <Heading size="large" css={headingStyle}>
      {children}
    </Heading>
  );
}

function H4({ children }: ContentProps) {
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

function Paragraph({ children }: ContentProps) {
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

function Code({ children }: ContentProps) {
  return <CodeBase>{children}</CodeBase>;
}

const codeBlockStyle = css`
  margin-bottom: ${tokens.spacing.small};

  & code {
    white-space: pre;
    margin: 0;
    padding: 0;
  }
`;

function CodeBlock({ children }: ContentProps) {
  return <CodeBlockBase css={codeBlockStyle}>{children}</CodeBlockBase>;
}

const tableStyle = css`
  width: auto;
`;

function Table({ children }: ContentProps) {
  return <TableBase css={tableStyle}>{children}</TableBase>;
}

function Section({ children }: ContentProps) {
  // Iterate over children to handle , find H2 element, if it exists
  const mainSectionHeading = React.Children.map(children, (child) => {
    if (child.type.name === 'H2') {
      return child.props.children;
    }
  });

  const addEntry = useAddTableOfContentsEntry();

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef);

  useEffect(() => {
    if (mainSectionHeading && mainSectionHeading[0]) {
      const headingId = slugify(mainSectionHeading[0]);

      addEntry(({ activeEntry, entries }) => {
        const activeHeading = isVisible ? headingId : activeEntry;
        // If entry already exists, don't add it
        return {
          activeEntry: activeHeading,
          entries: entries.includes(mainSectionHeading[0])
            ? entries
            : entries.concat(mainSectionHeading[0]),
        };
      });
    }
  }, [addEntry, mainSectionHeading, isVisible]);

  if (!mainSectionHeading) {
    return <section>{children}</section>;
  }

  return <section ref={sectionRef}>{children}</section>;
}

const markdownElements = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  a: RegularLink,
  code: Code,
  pre: CodeBlock,
  ul: List,
  li: List.Item,
  table: Table,
  th: TableBase.HeadCell,
  td: TableBase.Cell,
  section: Section,
};

export default markdownElements;
