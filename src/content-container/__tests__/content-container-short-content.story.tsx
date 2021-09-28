import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { hexToRgba } from '../../helpers';
import { Paragraph } from '../../paragraph';
import { ContentContainer } from '../index';

const containerStyle = css`
  background-color: ${hexToRgba(tokens.colors.navy, tokens.opacity.medium)};
`;

const textStyle = css`
  background-color: ${tokens.colors.orange};
  margin: 0;
`;

function Story() {
  return (
    <ContentContainer css={containerStyle} data-testid="container">
      <Paragraph css={textStyle}>Short content</Paragraph>
    </ContentContainer>
  );
}

export default Story;
