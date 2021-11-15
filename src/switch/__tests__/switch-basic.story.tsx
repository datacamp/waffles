import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Switch } from '../index';

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
      <Switch checked={isChecked} onChange={toggle}>
        Basic switch
      </Switch>
    </div>
  );
}

export default Story;
