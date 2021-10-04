import React from 'react';
import { css } from '@emotion/react';

import { Paragraph as ParagraphBase } from '@datacamp/waffles/paragraph';
import markdownElements from '../components/markdown-elements';

const paragraphStyle = css`
  margin: 0;
`;

type ParagraphProps = {
  children: React.ReactNode;
};

function Paragraph({ children }: ParagraphProps) {
  return <ParagraphBase css={paragraphStyle}>{children}</ParagraphBase>;
}

export default {
  ...markdownElements,
  p: Paragraph,
};
