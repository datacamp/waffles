import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Input } from '@datacamp/waffles/input';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <Input type="search" placeholder="Search" />
      <Input type="password" placeholder="Password" />
    </div>
  );
}

export default Example;
