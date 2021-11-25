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
      <InputField
        disabled
        label="Disabled input field"
        placeholder="Disabled"
      />
      <InputField
        error="Error message"
        label="Input field in error state"
        placeholder="Error"
      />
    </form>
  );
}

export default Example;
