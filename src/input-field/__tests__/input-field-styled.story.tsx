/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { InputField } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customInputFieldStyle = css`
  border-color: ${tokens.colors.purpleDark};
  color: ${tokens.colors.purpleDarkText};
  background-color: ${tokens.colors.yellowLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <InputField
        css={customInputFieldStyle}
        label="Input field with custom style"
        value="Input field value"
        onChange={() => {}}
      />
    </div>
  );
}

export default Story;
