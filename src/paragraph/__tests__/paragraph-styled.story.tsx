import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Paragraph } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customParagraphStyle = css`
  color: ${tokens.colors.redDarkText};
  font-size: ${tokens.fontSizes.xlarge};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Paragraph css={customParagraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </div>
  );
}

export default Story;
