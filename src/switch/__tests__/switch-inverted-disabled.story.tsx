/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Switch } from '../index';

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
        <Switch checked={false} onChange={() => {}}>
          Regular switch
        </Switch>
        <Switch disabled checked={false} onChange={() => {}}>
          Regular disabled switch
        </Switch>
        <Switch checked={true} onChange={() => {}}>
          Regular toggled on switch
        </Switch>
        <Switch disabled checked={true} onChange={() => {}}>
          Regular disabled toggled on switch
        </Switch>
      </div>
      {/* Inverted */}
      <div
        css={css`
          ${wrapperStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Switch inverted checked={false} onChange={() => {}}>
          Inverted switch
        </Switch>
        <Switch inverted disabled checked={false} onChange={() => {}}>
          Inverted disabled switch
        </Switch>
        <Switch inverted checked={true} onChange={() => {}}>
          Inverted toggled on switch
        </Switch>
        <Switch inverted disabled checked={true} onChange={() => {}}>
          Inverted disabled toggled on switch
        </Switch>
      </div>
    </>
  );
}

export default Story;
