import { useState } from 'react';
import { css } from '@emotion/react';

import { Checkbox } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [isChecked, setIsChecked] = useState(false);

  function toggle() {
    setIsChecked(!isChecked);
  }

  return (
    <div css={wrapperStyle}>
      <Checkbox checked={isChecked} onChange={toggle}>
        Basic checkbox
      </Checkbox>
    </div>
  );
}

export default Story;
