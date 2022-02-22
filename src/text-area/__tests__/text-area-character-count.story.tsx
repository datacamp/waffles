import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { TextArea } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [value, setValue] = useState('');

  return (
    <div css={wrapperStyle}>
      <TextArea
        aria-label="Text area character count"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={3}
        showCharacterCount
        maxLength={20}
      />
    </div>
  );
}

export default Story;
