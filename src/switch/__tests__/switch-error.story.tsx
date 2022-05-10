/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { Switch } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <>
      {/* Regular */}
      <div css={wrapperStyle}>
        <Switch error checked={false} onChange={() => {}}>
          Regular switch with error
        </Switch>
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Switch error inverted checked={false} onChange={() => {}}>
          Inverted switch with error
        </Switch>
      </div>
    </>
  );
}

export default Story;
