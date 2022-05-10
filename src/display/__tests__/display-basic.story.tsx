import { css } from '@emotion/react';

import { Display } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        <Display>Big and short non-semantic message</Display>
      </div>
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Display inverted>Big and short non-semantic message inverted</Display>
      </div>
    </>
  );
}

export default Story;
