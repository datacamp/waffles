/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Select } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-bottom: ${tokens.spacing.xlarge};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <Select
          aria-label="Regular select with error"
          error
          value="python"
          onChange={() => {}}
        >
          <option value="python">Python</option>
          <option value="sql">SQL</option>
        </Select>
      </div>
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Select
          aria-label="Inverted select with error"
          inverted
          value="python"
          onChange={() => {}}
        >
          <option value="python">Python</option>
          <option value="sql">SQL</option>
        </Select>
      </div>
    </>
  );
}

export default Story;
