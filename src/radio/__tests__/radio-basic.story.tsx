import React, { useState } from 'react';
import { css } from '@emotion/react';

import { Radio } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [value, setValue] = useState('radio1');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div css={wrapperStyle}>
      <Radio
        name="radioGroup"
        value="radio1"
        checked={value === 'radio1'}
        onChange={handleChange}
      >
        Basic radio 1
      </Radio>
      <Radio
        name="radioGroup"
        value="radio2"
        checked={value === 'radio2'}
        onChange={handleChange}
      >
        Basic radio 2
      </Radio>
    </div>
  );
}

export default Story;
