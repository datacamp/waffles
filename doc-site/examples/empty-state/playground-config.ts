import { Paragraph } from '@datacamp/waffles/paragraph';
import { Group, Branch, Matrix } from '@datacamp/waffles/icon';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Rocket3d } from '@datacamp/waffles/asset';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Group, Branch, Matrix } from '@datacamp/waffles/icon';
import { EmptyState } from '@datacamp/waffles/empty-state';
import { Button } from '@datacamp/waffles/button';
import { Rocket3d } from '@datacamp/waffles/asset';

function Playground() {
  return (
    <EmptyState
      title="Title"
      image={<Rocket3d />}
    >
      <Paragraph>
        Custom description.
      </Paragraph>
      <EmptyState.List>
        <EmptyState.ListItem icon={<Group />}>
          First item
        </EmptyState.ListItem>
        <EmptyState.ListItem icon={<Branch />}>
          Second item
        </EmptyState.ListItem>
        <EmptyState.ListItem icon={<Matrix />}>
          Third item
        </EmptyState.ListItem>
      </EmptyState.List>
      <Button>Button</Button>
    </EmptyState>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Paragraph,
    Button,
    EmptyState,
    Rocket3d,
    Group,
    Branch,
    Matrix,
  },
};

export default playgroundConfig;
