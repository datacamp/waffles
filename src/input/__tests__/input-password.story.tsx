/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Input } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Input
        type="password"
        aria-label="Password"
        value="password1"
        onChange={() => {}}
      />
    </div>
  );
}

export default Story;
