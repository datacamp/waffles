import { css } from '@emotion/react';

import { Tooltip } from '../index';
import { tokens } from '../../tokens';
import { Button } from '../../button';

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
