import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Tabs } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tabs activeTab="first-tab">
        <Tabs.Tab key="first-tab" as="a" href="#first-tab" label="First Tab">
          <Paragraph>First Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab key="second-tab" as="a" href="#second-tab" label="Second Tab">
          <Paragraph>Second Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab key="third-tab" as="a" href="#third-tab" label="Third Tab">
          <Paragraph>Third Tab Content</Paragraph>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Story;
