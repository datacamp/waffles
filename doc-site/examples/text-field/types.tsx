import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { TextField } from '@datacamp/waffles/text-field';

function Example() {
  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <TextField type="search" label="Search" />
      <TextField type="password" label="Password" />
    </form>
  );
}

export default Example;
