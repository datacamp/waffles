/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Checkbox } from '@datacamp/waffles/checkbox';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <Checkbox disabled checked={false} onChange={() => {}}>
        Disabled checkbox
      </Checkbox>
      <Checkbox error checked={false} onChange={() => {}}>
        Checkbox in error state
      </Checkbox>
    </div>
  );
}

export default Example;
