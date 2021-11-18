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
      <TextField size="large" label="Large text field" />
      <TextField size="medium" label="Medium text field" />
      <TextField size="small" label="Small text field" />
    </form>
  );
}

export default Example;
