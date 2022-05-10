import { css } from '@emotion/react';

import { Portal } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';

const contentStyle = css`
  position: absolute;
  z-index: ${tokens.zIndex.default};
  top: ${tokens.spacing.large};
  right: ${tokens.spacing.large};
  padding: ${tokens.spacing.small};
  background-color: ${tokens.colors.orange};
`;

function Story() {
  return (
    <Portal>
      <Paragraph css={contentStyle}>Custom Portal content</Paragraph>
    </Portal>
  );
}

export default Story;
