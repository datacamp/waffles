import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { hexToRgba } from '../../helpers';
import { Paragraph } from '../../paragraph';
import { Text } from '../../text';
import { ContentContainer } from '../index';

const containerStyle = css`
  background-color: ${hexToRgba(tokens.colors.navy, tokens.opacity.medium)};
`;

const textStyle = css`
  background-color: ${tokens.colors.orange};
  margin: 0;
`;

const layoutStyle = css`
  display: grid;
  grid-template-columns: 230px 1fr;
`;

const sidebarStyle = css`
  height: 100vh;
  padding: ${tokens.spacing.medium};
  background-color: ${tokens.colors.navy};
`;

const sidebarLabelStyle = css`
  color: ${tokens.colors.white};
`;

function Story() {
  return (
    <div css={layoutStyle}>
      <div css={sidebarStyle}>
        <Text css={sidebarLabelStyle}>Sidebar</Text>
      </div>
      <ContentContainer css={containerStyle} data-testid="container">
        <Paragraph css={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </ContentContainer>
    </div>
  );
}

export default Story;
