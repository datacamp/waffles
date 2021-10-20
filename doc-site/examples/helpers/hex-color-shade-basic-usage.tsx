import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { hexColorShade } from '@datacamp/waffles/helpers';
import { Text } from '@datacamp/waffles/text';

const wrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${tokens.spacing.small};
`;

const cardStyle = css`
  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
`;

const textStyle = css`
  font-weight: ${tokens.fontWeights.bold};
`;

type ColorCardProps = {
  backgroundColor: string;
};

function ColorCard({ backgroundColor }: ColorCardProps) {
  return (
    <div
      css={css`
        ${cardStyle}
        background-color: ${backgroundColor};
      `}
    >
      <Text css={textStyle}>{backgroundColor}</Text>
    </div>
  );
}

function Example() {
  return (
    <div css={wrapperStyle}>
      <ColorCard backgroundColor={tokens.colors.green} />
      <ColorCard
        backgroundColor={hexColorShade(
          tokens.colors.green,
          tokens.opacity.medium,
        )}
      />
      <ColorCard
        backgroundColor={hexColorShade(tokens.colors.green, tokens.opacity.low)}
      />
      <ColorCard
        backgroundColor={hexColorShade(
          tokens.colors.green,
          -tokens.opacity.low,
        )}
      />
    </div>
  );
}

export default Example;
