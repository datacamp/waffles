import React, { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Select } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [value, setValue] = useState('python');

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return (
    <div css={wrapperStyle}>
      <Select label="Basic select" value={value} onChange={handleChange}>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
        <option value="r-lang">R</option>
      </Select>
    </div>
  );
}

export default Story;
