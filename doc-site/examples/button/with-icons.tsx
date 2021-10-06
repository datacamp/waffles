import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { AddCircle, Trash, ChevronRight } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
      `}
    >
      <Button icon={<Trash />} aria-label="Icon only" variant="destructive" />
      <Button iconLeft={<AddCircle />}>Icon Left</Button>
      <Button iconRight={<ChevronRight />}>Icon Right</Button>
      <Button iconLeft={<AddCircle />} iconRight={<ChevronRight />}>
        Both Icons
      </Button>
    </div>
  );
}

export default Example;
