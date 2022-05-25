import { Menu } from '@datacamp/waffles/menu';
import {
  Code,
  Edit,
  Copy,
  Visible,
  ExternalLink,
} from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <Menu
      trigger={<Button variant="secondary">Workspace</Button>}
      placement="right"
    >
      <Menu.Category noDivider>
        <Menu.Item label="Edit" iconLeft={<Code />} />
        <Menu.Item label="Rename" iconLeft={<Edit />} />
        <Menu.Item label="Duplicate" iconLeft={<Copy />} />
      </Menu.Category>
      <Menu.Category>
        <Menu.Item
          as="a"
          href="https://app.datacamp.com"
          label="View Publication"
          iconLeft={<Visible />}
          iconRight={<ExternalLink />}
        />
      </Menu.Category>
    </Menu>
  );
}

export default Example;
