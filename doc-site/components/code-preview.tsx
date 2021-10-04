import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';

const wrapperStyle = css`
  position: relative;
  padding: ${tokens.spacing.medium};
  background-color: #151d28;
  border-radius: ${tokens.borderRadius.medium};
  border-left: 8px solid ${tokens.colors.purple};
  overflow: hidden;
  transition: border-color 125ms ease-out;
`;

type CodePreviewProps = React.HTMLAttributes<HTMLDivElement>;

function CodePreview(props: CodePreviewProps): JSX.Element {
  return <div css={wrapperStyle} {...props} />;
}

export default CodePreview;
