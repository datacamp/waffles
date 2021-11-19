/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Switch } from '@datacamp/waffles/switch';

function Example() {
  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
        width: 300px;
      `}
    >
      <Switch disabled checked={false} onChange={() => {}}>
        Disabled switch
      </Switch>
      <Switch error checked={false} onChange={() => {}}>
        Switch in error state
      </Switch>
    </form>
  );
}

export default Example;
