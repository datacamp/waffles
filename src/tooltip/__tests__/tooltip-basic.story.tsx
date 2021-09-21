import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Button } from '../../button';
import { Tooltip } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tooltip content="Basic Tooltip">
        <Button>Tooltip Trigger</Button>
      </Tooltip>
    </div>
  );
}

export default Story;
