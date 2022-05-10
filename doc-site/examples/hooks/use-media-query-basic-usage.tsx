import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { useMediaQuery } from '@datacamp/waffles/hooks';

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
  line-height: ${tokens.lineHeights.default};
  margin-bottom: 0;
`;

type CardProps = {
  children: React.ReactNode;
  backgroundColor: string;
};

function Card({ children, backgroundColor }: CardProps) {
  return (
    <div
      css={css`
        ${cardStyle}
        background-color: ${backgroundColor};
      `}
    >
      <Paragraph css={textStyle}>{children}</Paragraph>
    </div>
  );
}

function Example() {
  const { isAboveSmall, isAboveMedium, isAboveLarge } = useMediaQuery();

  return (
    <>
      <Paragraph>
        Resize the viewport to make cards below appear / disappear.
      </Paragraph>
      <div css={wrapperStyle}>
        <Card backgroundColor={tokens.colors.orange}>
          Below small breakpoint:
          <br />
          Mobile
        </Card>
        {isAboveSmall && (
          <Card backgroundColor={tokens.colors.pink}>
            Above small breakpoint:
            <br />
            Tablet
          </Card>
        )}
        {isAboveMedium && (
          <Card backgroundColor={tokens.colors.yellow}>
            Above medium breakpoint:
            <br />
            Desktop
          </Card>
        )}
        {isAboveLarge && (
          <Card backgroundColor={tokens.colors.blue}>
            Above large breakpoint:
            <br />
            Wide Screen
          </Card>
        )}
      </div>
    </>
  );
}

export default Example;
