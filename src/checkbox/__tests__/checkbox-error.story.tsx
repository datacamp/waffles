/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Checkbox } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        <Checkbox error checked={false} onChange={() => {}}>
          Regular checkbox with error
        </Checkbox>
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Checkbox error inverted checked={false} onChange={() => {}}>
          Inverted checkbox with error
        </Checkbox>
      </div>
    </>
  );
}

export default Story;
