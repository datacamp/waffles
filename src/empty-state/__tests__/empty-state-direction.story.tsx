import { css } from '@emotion/react';

import { EmptyState } from '../index';
import { tokens } from '../../tokens';
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
        direction="row"
        data-testid="empty-state"
      >
        <EmptyState.Content>Lorem ipsum dolor sit amet.</EmptyState.Content>
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
        <EmptyState.Content>
          <Button>Button</Button>
        </EmptyState.Content>
      </EmptyState>
      <EmptyState
        title="Direction: Column"
        image={<Rocket3d />}
        direction="column"
        data-testid="empty-state"
      >
        <EmptyState.Content>Lorem ipsum dolor sit amet.</EmptyState.Content>
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
        <EmptyState.Content>
          <Button>Button</Button>
        </EmptyState.Content>
      </EmptyState>
    </div>
  );
}

export default Story;
