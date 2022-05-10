import { css } from '@emotion/react';

import { Button } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customButtonStyle = css`
  color: ${tokens.colors.redDarkText};
  background-color: ${tokens.colors.yellowLight};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Button css={customButtonStyle}>Button with Custom Styles</Button>
    </div>
  );
}

export default Story;
