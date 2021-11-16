/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Select } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <Select
          required
          label="Select with required indicator"
          value=""
          onChange={() => {}}
        >
          <option value="" disabled hidden>
            Select a programming language...
          </option>
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
          inverted
          required
          label="Inverted select with required indicator"
          value=""
          onChange={() => {}}
        >
          <option value="" disabled hidden>
            Select a programming language...
          </option>
          <option value="python">Python</option>
          <option value="sql">SQL</option>
        </Select>
      </div>
    </>
  );
}

export default Story;
