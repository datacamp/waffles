/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextField } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customTextFieldStyle = css`
  border-color: ${tokens.colors.purpleDark};
  color: ${tokens.colors.purpleDarkText};
  background-color: ${tokens.colors.yellowLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <TextField
        css={customTextFieldStyle}
        label="Text field with custom style"
        value="Text field value"
        onChange={() => {}}
      />
    </div>
  );
}

export default Story;
