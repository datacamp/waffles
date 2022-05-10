import React, { useState } from 'react';
import { css } from '@emotion/react';

import { FormField } from '../index';
import { tokens } from '../../tokens';
import { Input } from '../../input';

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
      <FormField
        label="Regular input"
        description="Description of regular input"
      >
        <Input value={value} onChange={handleChange} />
      </FormField>
    </div>
  );
}

export default Story;
