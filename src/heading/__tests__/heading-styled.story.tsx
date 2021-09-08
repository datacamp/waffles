import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Heading } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customParagraphStyle = css`
  color: ${tokens.colors.purpleDarkText};
  font-size: ${tokens.fontSizes.huge};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Heading css={customParagraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Heading>
    </div>
  );
}

export default Story;
