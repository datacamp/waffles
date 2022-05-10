import React, { useState } from 'react';
import { css } from '@emotion/react';

import { Input } from '../index';
import { tokens } from '../../tokens';

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
      <Input value={value} onChange={handleChange} aria-label="Basic input" />
    </div>
  );
}

export default Story;
