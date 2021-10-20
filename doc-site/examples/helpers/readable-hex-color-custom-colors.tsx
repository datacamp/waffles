import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { readableHexColor } from '@datacamp/waffles/helpers';
import { Text } from '@datacamp/waffles/text';

const wrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${tokens.spacing.small};
`;

const cardStyle = css`
  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
`;

const textStyle = css`
  font-weight: ${tokens.fontWeights.bold};
`;

type ContrastCardProps = {
  backgroundColor: string;
};

function ContrastCard({ backgroundColor }: ContrastCardProps) {
  const textColor = readableHexColor(
    backgroundColor,
    tokens.colors.purpleDarkText,
    tokens.colors.green,
  );

  return (
    <div
      css={css`
        ${cardStyle}
        background-color: ${backgroundColor};
      `}
    >
      <Text
        css={css`
          ${textStyle}
          color: ${textColor};
        `}
      >
        {textColor}
      </Text>
    </div>
  );
}

function Example() {
  return (
    <div css={wrapperStyle}>
      <ContrastCard backgroundColor={tokens.colors.navy} />
      <ContrastCard backgroundColor={tokens.colors.purpleDark} />
      <ContrastCard backgroundColor={tokens.colors.yellow} />
    </div>
  );
}

export default Example;
