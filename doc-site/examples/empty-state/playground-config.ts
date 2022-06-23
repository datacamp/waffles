import { Group, Branch, Matrix } from '@datacamp/waffles/icon';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Rocket3d } from '@datacamp/waffles/asset';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Group, Branch, Matrix } from '@datacamp/waffles/icon';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Rocket3d } from '@datacamp/waffles/asset';

function Playground() {
  return (
    <EmptyState title="Title Heading" image={<Rocket3d />}>
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
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Button,
    EmptyState,
    Rocket3d,
    Group,
    Branch,
    Matrix,
  },
};

export default playgroundConfig;
