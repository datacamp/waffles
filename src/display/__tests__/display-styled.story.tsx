import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Display } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customDisplayStyle = css`
  color: ${tokens.colors.purpleDarkText};
  letter-spacing: ${tokens.letterSpacing.relaxed};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Display css={customDisplayStyle}>Display with custom styles</Display>
    </div>
  );
}

export default Story;
