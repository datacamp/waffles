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
      <Checkbox disabled>Disabled checkbox</Checkbox>
      <Checkbox error>Checkbox in error state</Checkbox>
    </div>
  );
}

export default Example;
