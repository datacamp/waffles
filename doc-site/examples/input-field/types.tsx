import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { InputField } from '@datacamp/waffles/input-field';

function Example() {
  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.large};
      `}
    >
      <InputField type="search" label="Search" />
      <InputField type="password" label="Password" />
    </form>
  );
}

export default Example;
