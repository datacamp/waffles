/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Checkbox } from '../index';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
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
        <Checkbox error checked={true} onChange={() => {}}>
          Regular ticked checkbox with error
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
        <Checkbox error inverted checked={true} onChange={() => {}}>
          Inverted ticked checkbox with error
        </Checkbox>
      </div>
    </>
  );
}

export default Story;
