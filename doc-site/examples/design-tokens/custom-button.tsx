import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { hexColorShade } from '@datacamp/waffles/helpers';
import { Button } from '@datacamp/waffles/button';

const customButtonStyle = css`
  background-color: ${tokens.colors.purple};
  color: ${tokens.colors.white};

  &:hover:not(:disabled) {
    background-color: ${hexColorShade(
      tokens.colors.purple,
      -tokens.opacity.low,
    )};
  }

  &:active:not(:disabled) {
    background-color: ${tokens.colors.purple};
  }
`;

function Example() {
  return <Button css={customButtonStyle}>Custom Style</Button>;
}

export default Example;
