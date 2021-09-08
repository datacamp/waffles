import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Text } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Text>Basic short text content</Text>
    </div>
  );
}

export default Story;
