import { EmptyState } from '../index';
import { Group, Branch, Matrix } from '../../icon';
import { Button } from '../../button';
import { Rocket3d } from '../../asset';

function Story() {
  return (
    <EmptyState
      title="Title Heading"
      image={<Rocket3d />}
      direction="column"
      isCentered
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
  );
}

export default Story;
