import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Button } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Button>Basic Button</Button>
    </div>
  );
}

export default Story;
