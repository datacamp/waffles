import { css } from '@emotion/react';

import { Button } from '../index';
import { tokens } from '../../tokens';

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
