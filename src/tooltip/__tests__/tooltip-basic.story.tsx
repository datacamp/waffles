import { css } from '@emotion/react';

import { Tooltip } from '../index';
import { tokens } from '../../tokens';
import { Button } from '../../button';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tooltip content="Basic Tooltip" placement="top">
        <Button>Tooltip Trigger</Button>
      </Tooltip>
    </div>
  );
}

export default Story;
