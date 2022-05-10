import React from 'react';
import { css } from '@emotion/react';
import { Paragraph as ParagraphBase } from '@datacamp/waffles/paragraph';

import markdownElements from '../components/markdown-elements';

const paragraphStyle = css`
  margin-bottom: 0;
`;

type ParagraphProps = {
  children: React.ReactNode;
};

function Paragraph({ children }: ParagraphProps) {
  return <ParagraphBase css={paragraphStyle}>{children}</ParagraphBase>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { table, th, td, ...markdownElementsWithoutTable } = markdownElements;

const propsTableMarkdownElements = {
  ...markdownElementsWithoutTable,
  p: Paragraph,
};

export default propsTableMarkdownElements;
