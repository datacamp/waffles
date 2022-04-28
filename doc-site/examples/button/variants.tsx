import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        flex-wrap: wrap;
      `}
    >
      <Button variant="primary">Primary Variant</Button>
      <Button variant="secondary">Secondary Variant</Button>
      <Button variant="plain">Plain Variant</Button>
      <Button variant="destructive">Destructive Variant</Button>
      <Button variant="upgrade">Upgrade Variant</Button>
    </div>
  );
}

export default Example;
