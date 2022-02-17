import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';

import { CODE_PREVIEW_BORDER } from './constants';

const wrapperStyle = css`
  position: relative;
  padding: ${tokens.spacing.medium};
  background-color: #151d28;
  border-right: ${CODE_PREVIEW_BORDER} solid #151d28;
  border-left: 8px solid ${tokens.colors.purple};
  overflow-y: hidden;
  overflow-x: auto;
  transition: border-color 125ms ease-out;
  cursor: text;

  /* Target 3rd party wrapper */
  & > pre {
    overflow: visible;
  }
`;

type CodePreviewProps = React.HTMLAttributes<HTMLDivElement>;

function CodePreview(props: CodePreviewProps): JSX.Element {
  return <div css={wrapperStyle} {...props} />;
}

export default CodePreview;
