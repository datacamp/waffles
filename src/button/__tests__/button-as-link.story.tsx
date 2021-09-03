import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Button } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Button as="a" href="https://datacamp.com">
        Link
      </Button>
    </div>
  );
}

export default Story;
