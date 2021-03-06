/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Select } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customSelectStyle = css`
  border-color: ${tokens.colors.purpleDark};
  color: ${tokens.colors.purpleDarkText};
  background-color: ${tokens.colors.yellowLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Select
        css={customSelectStyle}
        aria-label="Select with custom styles"
        value="python"
        onChange={() => {}}
      >
        <option value="python">Python</option>
        <option value="sql">SQL</option>
      </Select>
    </div>
  );
}

export default Story;
