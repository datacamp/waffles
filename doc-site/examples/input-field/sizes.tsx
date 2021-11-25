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
      <InputField size="large" label="Large input field" />
      <InputField size="medium" label="Medium input field" />
      <InputField size="small" label="Small input field" />
    </form>
  );
}

export default Example;
