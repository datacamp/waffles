import { Paragraph } from '@datacamp/waffles/paragraph';
import { Group, Branch, Matrix } from '@datacamp/waffles/icon';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Rocket3d } from '@datacamp/waffles/asset';

function Example() {
  return (
    <EmptyState
      title="Benefit from collaborative learning"
      image={<Rocket3d />}
    >
      <Paragraph>
        Groups are most useful when you’re learning with your colleagues. Invite
        members to your group here or share your unique invite link with them
        directly.
      </Paragraph>
      <Paragraph>
        Reach out to your admin to get relevant content assigned to you.
      </Paragraph>
      <EmptyState.List>
        <EmptyState.ListItem icon={<Group />}>
          Meet new colleagues and learn from each other
        </EmptyState.ListItem>
        <EmptyState.ListItem icon={<Branch />}>
          Stay motivated by tracking each other’s progress
        </EmptyState.ListItem>
        <EmptyState.ListItem icon={<Matrix />}>
          Ask for advice when you’re feeling stuck
        </EmptyState.ListItem>
      </EmptyState.List>
      <Button>Create Group</Button>
    </EmptyState>
  );
}

export default Example;
