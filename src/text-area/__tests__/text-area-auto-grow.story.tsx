import React, { useState } from 'react';
import { css } from '@emotion/react';

import { TextArea } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  width: 300px;
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return (
    <div css={wrapperStyle}>
      <TextArea
        aria-label="Auto-growing text area"
        autoGrow
        value={value}
        onChange={handleChange}
        rows={3}
      />
    </div>
  );
}

export default Story;
