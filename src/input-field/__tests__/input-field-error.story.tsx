/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { InputField } from '../index';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <InputField
        label="First input field with error"
        value="Invalid value"
        onChange={() => {}}
        error="Provide correct value."
      />
      <InputField
        label="Second input field with error"
        value="Invalid value"
        onChange={() => {}}
        error="Provide correct value."
      />
      <InputField
        label="Third input field with error"
        value="Invalid value"
        onChange={() => {}}
        error="Provide correct value."
      />
    </div>
  );
}

export default Story;
