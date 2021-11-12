/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Input } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <Input
          error
          value="Input with error"
          onChange={() => {}}
          aria-label="Basic input"
        />
      </div>
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Input
          error
          inverted
          value="Inverted input with error"
          onChange={() => {}}
          aria-label="Basic input"
        />
      </div>
    </>
  );
}

export default Story;
