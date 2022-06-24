import { css } from '@emotion/react';

import { EmptyState } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Group, Branch, Matrix } from '../../icon';
import { Button } from '../../button';
import { Rocket3d } from '../../asset';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <EmptyState
        title="Direction: Row"
        image={<Rocket3d />}
        orientation="horizontal"
        data-testid="empty-state"
      >
        <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
        <EmptyState.List>
          <EmptyState.ListItem icon={<Group />}>
            Auctor eu augue
          </EmptyState.ListItem>
          <EmptyState.ListItem icon={<Branch />}>
            Tristique senectus et netus
          </EmptyState.ListItem>
          <EmptyState.ListItem icon={<Matrix />}>
            Mus mauris vitae ultricies
          </EmptyState.ListItem>
        </EmptyState.List>
        <Button>Button</Button>
      </EmptyState>
      <EmptyState
        title="Direction: Column"
        image={<Rocket3d />}
        orientation="vertical"
        data-testid="empty-state"
      >
        <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
        <EmptyState.List>
          <EmptyState.ListItem icon={<Group />}>
            Auctor eu augue
          </EmptyState.ListItem>
          <EmptyState.ListItem icon={<Branch />}>
            Tristique senectus et netus
          </EmptyState.ListItem>
          <EmptyState.ListItem icon={<Matrix />}>
            Mus mauris vitae ultricies
          </EmptyState.ListItem>
        </EmptyState.List>
        <Button>Button</Button>
      </EmptyState>
    </div>
  );
}

export default Story;
