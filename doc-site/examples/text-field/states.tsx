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
      <TextField disabled label="Disabled text field" placeholder="Disabled" />
      <TextField
        error="Error message"
        label="Text field in error state"
        placeholder="Error"
      />
    </form>
  );
}

export default Example;
