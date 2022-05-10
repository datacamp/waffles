import { css } from '@emotion/react';

import { Text } from '../index';
import { tokens } from '../../tokens';

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
