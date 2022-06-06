import { css } from '@emotion/react';

import { Tabs } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { mediaQuery } from '../../helpers';

const wrapperStyle = css`
  padding-top: ${tokens.spacing.medium};
  padding-left: ${tokens.spacing.small};
  padding-right: ${tokens.spacing.small};

  ${mediaQuery.aboveSmall} {
    padding-left: ${tokens.spacing.medium};
    padding-right: ${tokens.spacing.medium};
  }
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Tabs activeTab={0}>
        <Tabs.Tab label="First Tab">
          <Paragraph>First Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab label="Second Tab With Long Label">
          <Paragraph>Second Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab disabled label="Disabled Third Tab">
          <Paragraph>Third Tab Content</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab label="Fourth Tab With Long Label">
          <Paragraph>Fourth Tab Content</Paragraph>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Story;
