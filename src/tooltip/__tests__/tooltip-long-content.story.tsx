import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Button } from '../../button';
import { Tooltip } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-top: 60px;
`;

const longTextContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tooltip content={longTextContent} placement="right">
        <Button>Tooltip Trigger</Button>
      </Tooltip>
    </div>
  );
}

export default Story;
