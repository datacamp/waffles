import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Cog } from '../../icon';
import { Button } from '../index';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const variants = ['primary', 'secondary', 'plain', 'destructive'] as const;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        {variants.map((variant) => {
          return (
            <Button key={variant} variant={variant} fullWidth>
              Full Width
            </Button>
          );
        })}
      </div>
      <div css={wrapperStyle}>
        {variants.map((variant) => {
          return (
            <Button
              iconLeft={<Cog />}
              key={variant}
              variant={variant}
              fullWidth
            >
              With Icon
            </Button>
          );
        })}
      </div>
    </>
  );
}

export default Story;
