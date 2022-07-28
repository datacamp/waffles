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
      <Button isLoading>Loading ...</Button>
      <Button isLoading />
    </div>
  );
}

export default Example;
