import { Menu } from '@datacamp/waffles/menu';
import { More, Code, Edit, Copy, Trash } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <Menu
      inverted
      trigger={
        <Button variant="secondary" icon={<More />} aria-label="More options" />
      }
      placement="right"
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

export default Example;
