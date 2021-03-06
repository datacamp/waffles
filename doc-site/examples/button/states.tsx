import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
      `}
    >
      <Button>No State</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default Example;
