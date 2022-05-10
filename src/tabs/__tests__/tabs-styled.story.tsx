import { css } from '@emotion/react';

import { Tabs } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

const customTabListStyle = css`
  border-bottom-color: ${tokens.colors.navy};
`;

const customTabStyle = css`
  background-color: ${tokens.colors.green};
  color: ${tokens.colors.white};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tabs css={customTabListStyle} activeTab={0}>
        <Tabs.Tab
          css={customTabStyle}
          label="First Tab"
          data-testid="first-tab"
        >
          <Paragraph>First Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab label="Second Tab" data-testid="second-tab">
          <Paragraph>Second Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab disabled label="Third Tab Disabled" data-testid="third-tab">
          <Paragraph>Third Tab Content</Paragraph>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Story;
