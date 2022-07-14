import { css } from '@emotion/react';

import { Menu } from '../index';
import { tokens } from '../../tokens';
import { Code, Trash } from '../../icon';
import { Button } from '../../button';

const wrapperStyle = css`
  display: flex;
  height: 100vh;
`;

const sectionStyle = css`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <div css={sectionStyle}>
        <Menu trigger={<Button variant="secondary">Open Menu</Button>}>
          <Menu.Category noDivider>
            <Menu.Item label="Edit" iconLeft={<Code />} disabled />
            <Menu.Item
              label="Edit Active"
              iconLeft={<Code />}
              disabled
              isActive
            />
            <Menu.Item
              variant="destructive"
              label="Remove"
              iconLeft={<Trash />}
              disabled
            />
            <Menu.Item
              variant="destructive"
              label="Remove Active"
              iconLeft={<Trash />}
              disabled
              isActive
            />
          </Menu.Category>
        </Menu>
      </div>
      <div
        css={css`
          ${sectionStyle}
          background-color: ${tokens.colors.navy};
        `}
      >
        <Menu
          trigger={<Button variant="secondary">Open Inverted Menu</Button>}
          inverted
        >
          <Menu.Category noDivider>
            <Menu.Item label="Edit" iconLeft={<Code />} disabled />
            <Menu.Item
              label="Edit Active"
              iconLeft={<Code />}
              disabled
              isActive
            />
            <Menu.Item
              variant="destructive"
              label="Remove"
              iconLeft={<Trash />}
              disabled
            />
            <Menu.Item
              variant="destructive"
              label="Remove Active"
              iconLeft={<Trash />}
              disabled
              isActive
            />
          </Menu.Category>
        </Menu>
      </div>
    </div>
  );
}

export default Story;
