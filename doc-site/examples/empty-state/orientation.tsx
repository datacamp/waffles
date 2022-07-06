import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Rocket3d } from '@datacamp/waffles/asset';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.medium};
      `}
    >
      <EmptyState
        title="Orientation: Horizontal"
        image={<Rocket3d />}
        orientation="horizontal"
      >
        <Paragraph>
          Groups are most useful when you’re learning with your colleagues.
          Invite members to your group here or share your unique invite link
          with them directly.
        </Paragraph>
        <EmptyState.List>
          <EmptyState.ListItem>
            Stay motivated by tracking each other’s progress
          </EmptyState.ListItem>
          <EmptyState.ListItem>
            Ask for advice when you’re feeling stuck
          </EmptyState.ListItem>
          <EmptyState.ListItem>
            Meet new colleagues and learn from each other
          </EmptyState.ListItem>
        </EmptyState.List>
        <Button>Create Group</Button>
      </EmptyState>
      <EmptyState
        title="Orientation: Vertical"
        image={<Rocket3d />}
        orientation="vertical"
      >
        <Paragraph>
          Groups are most useful when you’re learning with your colleagues.
          Invite members to your group here or share your unique invite link
          with them directly.
        </Paragraph>
        <EmptyState.List>
          <EmptyState.ListItem>
            Stay motivated by tracking each other’s progress
          </EmptyState.ListItem>
          <EmptyState.ListItem>
            Ask for advice when you’re feeling stuck
          </EmptyState.ListItem>
          <EmptyState.ListItem>
            Meet new colleagues and learn from each other
          </EmptyState.ListItem>
        </EmptyState.List>
        <Button>Create Group</Button>
      </EmptyState>
    </div>
  );
}

export default Example;
