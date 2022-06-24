import { EmptyState } from '../index';
import { Paragraph } from '../../paragraph';
import { Group, Branch, Matrix } from '../../icon';
import { Button } from '../../button';
import { Rocket3d } from '../../asset';

function Story() {
  return (
    <EmptyState
      title="Title Heading"
      image={<Rocket3d />}
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
  );
}

export default Story;
