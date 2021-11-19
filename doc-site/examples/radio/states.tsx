/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Radio } from '@datacamp/waffles/radio';

function Example() {
  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
      `}
    >
      <Radio
        disabled
        name="state"
        value="disabled"
        checked={false}
        onChange={() => {}}
      >
        Disabled radio
      </Radio>
      <Radio
        error
        name="state"
        value="error"
        checked={false}
        onChange={() => {}}
      >
        Radio in error state
      </Radio>
    </form>
  );
}

export default Example;
