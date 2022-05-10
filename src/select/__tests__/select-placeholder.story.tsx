/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Select } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Select aria-label="Select with placeholder" value="" onChange={() => {}}>
        <option value="" disabled hidden>
          Select a programming language...
        </option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
        <option value="r-lang">R</option>
      </Select>
    </div>
  );
}

export default Story;
