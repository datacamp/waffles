import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Badge } from '@datacamp/waffles/badge';

function Example() {
  return (
    <>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
          margin-bottom: ${tokens.spacing.small};
        `}
      >
        <Badge color={tokens.colors.green} size="large">
          Large
        </Badge>
        <Badge color={tokens.colors.purple} size="medium">
          Medium
        </Badge>
        <Badge color={tokens.colors.navy} size="small">
          Small
        </Badge>
      </div>
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.small};
        `}
      >
        <Badge color={tokens.colors.green} size="large">
          Large Badge With Long Label
        </Badge>
        <Badge color={tokens.colors.purple} size="medium">
          Medium Badge With Long Label
        </Badge>
        <Badge color={tokens.colors.navy} size="small">
          Small Badge With Long Label
        </Badge>
      </div>
    </>
  );
}

export default Example;
