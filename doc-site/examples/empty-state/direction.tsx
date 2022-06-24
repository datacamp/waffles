import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Group, Branch, Matrix } from '@datacamp/waffles/icon';
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
      <EmptyState title="Direction: Row" image={<Rocket3d />} direction="row">
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
        direction="column"
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

export default Example;
