import { css } from '@emotion/react';

import { CodeBlock } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <CodeBlock>{`font-family: 22px;
font-weight: 700;
line-height: 1.575;
border-radius: 0;`}</CodeBlock>
    </div>
  );
}

export default Story;
