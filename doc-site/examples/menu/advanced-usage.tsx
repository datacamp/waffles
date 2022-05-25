import { forwardRef, useState } from 'react';
import { Menu, useMenu } from '@datacamp/waffles/menu';
import {
  ChevronUp,
  ChevronDown,
  Checkmark,
  Cross,
  Cog,
} from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

type MenuTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function MenuTriggerInternal(
  props: MenuTriggerProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { isOpen } = useMenu();

  return (
    <Button
      {...props}
      ref={ref}
      variant="secondary"
      iconRight={isOpen ? <ChevronUp /> : <ChevronDown />}
    >
      Roles
    </Button>
  );
}

// For menu trigger, it's important to forward ref
const MenuTrigger = forwardRef(MenuTriggerInternal);

// Wrap each set of menu Items with Category
function Example() {
  const [activeRole, setActiveRole] = useState<
    'editor' | 'commenter' | 'viewer'
  >('editor');
  return (
    <Menu trigger={<MenuTrigger />} placement="right">
      <Menu.Category noDivider>
        <Menu.Item
          label="Editor"
          description="Can edit the workspace."
          isActive={activeRole === 'editor'}
          iconRight={activeRole === 'editor' && <Checkmark />}
          onClick={() => setActiveRole('editor')}
        />
        <Menu.Item
          label="Commenter"
          description="Can comment on the workspace with a linger description."
          isActive={activeRole === 'commenter'}
          iconRight={activeRole === 'commenter' && <Checkmark />}
          onClick={() => setActiveRole('commenter')}
        />
        <Menu.Item
          label="Viewer"
          description="Can view the workspace."
          isActive={activeRole === 'viewer'}
          iconRight={activeRole === 'viewer' && <Checkmark />}
          onClick={() => setActiveRole('viewer')}
        />
      </Menu.Category>
      <Menu.Category label="Access">
        <Menu.Item
          label="Advanced Settings"
          showNotificationDot
          iconLeft={<Cog />}
        />
        <Menu.Item label="Disable" disabled iconLeft={<Cross />} />
      </Menu.Category>
      <Menu.Category>
        <Menu.Button variant="upgrade">Upgrade</Menu.Button>
      </Menu.Category>
    </Menu>
  );
}

export default Example;
