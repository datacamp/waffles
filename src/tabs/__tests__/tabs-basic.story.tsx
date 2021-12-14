import React, { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Tabs } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <div css={wrapperStyle}>
      <Tabs
        activeTab={activeTabIndex}
        onChange={(activeTab) => {
          setActiveTabIndex(activeTab);
        }}
      >
        <Tabs.Tab label="First Tab" data-testid="first-tab">
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
