/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Select } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-bottom: ${tokens.spacing.xlarge};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <Select
          error="Provide correct value."
          label="Regular select with error"
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
          error="Provide correct value."
          inverted
          label="Inverted select with error"
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
