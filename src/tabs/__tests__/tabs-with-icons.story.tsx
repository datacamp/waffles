import { css } from '@emotion/react';

import { Tabs } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Bell, Clock, Heart } from '../../icon';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tabs activeTab={0}>
        <Tabs.Tab icon={<Heart size="xsmall" />} label="First">
          <Paragraph>First Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab icon={<Clock size="xsmall" />} label="Second">
          <Paragraph>Second Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab icon={<Bell size="xsmall" />} label="Third">
          <Paragraph>Third Tab Content</Paragraph>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Story;
