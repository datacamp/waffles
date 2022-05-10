/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Input } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customInputStyle = css`
  border-color: ${tokens.colors.purpleDark};
  color: ${tokens.colors.purpleDarkText};
  background-color: ${tokens.colors.yellowLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Input
        css={customInputStyle}
        value="Input with Custom Style"
        onChange={() => {}}
        aria-label="Basic input"
      />
    </div>
  );
}

export default Story;
