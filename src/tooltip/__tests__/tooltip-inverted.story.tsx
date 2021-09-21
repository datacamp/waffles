import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Button } from '../../button';
import { Tooltip } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.navy};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tooltip inverted content="Inverted Tooltip" placement="right">
        <Button variant="secondary" inverted>
          Tooltip Trigger
        </Button>
      </Tooltip>
    </div>
  );
}

export default Story;
