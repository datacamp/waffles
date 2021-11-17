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
      <Input size="large" placeholder="Large Input" />
      <Input size="medium" placeholder="Medium Input" />
      <Input size="small" placeholder="Small Input" />
    </div>
  );
}

export default Example;
