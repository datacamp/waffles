/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextField } from '../index';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <TextField
        label="First text field with error"
        value="Invalid value"
        onChange={() => {}}
        error="Provide correct value."
      />
      <TextField
        label="Second text field with error"
        value="Invalid value"
        onChange={() => {}}
        error="Provide correct value."
      />
      <TextField
        label="Third text field with error"
        value="Invalid value"
        onChange={() => {}}
        error="Provide correct value."
      />
    </div>
  );
}

export default Story;
