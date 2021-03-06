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
      <Button variant="primary" inverted>
        Primary Inverted
      </Button>
      <Button variant="secondary" inverted>
        Secondary Inverted
      </Button>
      <Button variant="plain" inverted>
        Plain Inverted
      </Button>
      <Button variant="destructive" inverted>
        Destructive Inverted
      </Button>
      <Button variant="upgrade" inverted>
        Upgrade Inverted
      </Button>
    </div>
  );
}

export default Example;
