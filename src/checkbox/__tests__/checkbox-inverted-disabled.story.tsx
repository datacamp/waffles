/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Checkbox } from '../index';
import { tokens } from '../../tokens';

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
        <Checkbox checked={false} onChange={() => {}}>
          Regular checkbox
        </Checkbox>
        <Checkbox disabled checked={false} onChange={() => {}}>
          Regular disabled checkbox
        </Checkbox>
        <Checkbox checked={true} onChange={() => {}}>
          Regular ticked checkbox
        </Checkbox>
        <Checkbox disabled checked={true} onChange={() => {}}>
          Regular disabled ticked checkbox
        </Checkbox>
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Checkbox inverted checked={false} onChange={() => {}}>
          Inverted checkbox
        </Checkbox>
        <Checkbox inverted disabled checked={false} onChange={() => {}}>
          Inverted disabled checkbox
        </Checkbox>
        <Checkbox inverted checked={true} onChange={() => {}}>
          Inverted ticked checkbox
        </Checkbox>
        <Checkbox inverted disabled checked={true} onChange={() => {}}>
          Inverted disabled ticked checkbox
        </Checkbox>
      </div>
    </>
  );
}

export default Story;
