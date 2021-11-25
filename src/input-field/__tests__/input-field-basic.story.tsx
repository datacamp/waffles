import React, { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { InputField } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div css={wrapperStyle}>
      <InputField
        label="Basic input field"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Story;
