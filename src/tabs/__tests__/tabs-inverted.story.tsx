import React, { useState } from 'react';
import { css } from '@emotion/react';

import { Tabs } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';

const wrapperStyle = css`
  background-color: ${tokens.colors.navy};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <div css={wrapperStyle}>
      <Tabs
        inverted
        activeTab={activeTabIndex}
        onChange={(activeTab) => {
          setActiveTabIndex(activeTab);
        }}
      >
        <Tabs.Tab label="First Tab Inverted">
          <Paragraph inverted>First Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab label="Second Tab Inverted">
          <Paragraph inverted>Second Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab disabled label="Third Tab Inverted Disabled">
          <Paragraph inverted>Third Tab Content</Paragraph>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Story;
