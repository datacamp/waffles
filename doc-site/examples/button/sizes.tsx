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
      <Button size="large">Large Size</Button>
      <Button size="medium">Medium Size</Button>
      <Button size="small">Small Size</Button>
    </div>
  );
}

export default Example;
