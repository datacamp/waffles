import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Paragraph } from '@datacamp/waffles/paragraph';

const squareStyle = css`
  ${mediaQuery.small} {
    background-color: ${tokens.colors.pink};
  }

  ${mediaQuery.medium} {
    background-color: ${tokens.colors.yellow};
  }

  ${mediaQuery.large} {
    background-color: ${tokens.colors.blue};
  }

  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
  transition: background-color 300ms ease-out;
`;

const textStyle = css`
  margin-bottom: 0;
`;

function Example() {
  return (
    <div css={squareStyle}>
      <Paragraph css={textStyle}>
        Background color changes depending on the viewport size.
      </Paragraph>
    </div>
  );
}

export default Example;
