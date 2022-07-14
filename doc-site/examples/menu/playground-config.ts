import { Menu } from '@datacamp/waffles/menu';
import { Code, Edit, Copy, Trash } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Menu } from '@datacamp/waffles/menu';
import { More, Code, Edit, Copy } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

function Playground() {
  return (
    <Menu
      trigger={
        <Button variant="secondary">Open Menu</Button>
      }
    >
      <Menu.Category noDivider>
        <Menu.Item label="Edit" iconLeft={<Code />} />
        <Menu.Item label="Rename" iconLeft={<Edit />} />
        <Menu.Item label="Duplicate" iconLeft={<Copy />} disabled />
        <Menu.Item variant="destructive" label="Remove" iconLeft={<Trash />} />
      </Menu.Category>
    </Menu>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Menu,
    Button,
    Code,
    Edit,
    Copy,
    Trash,
  },
};

export default playgroundConfig;
